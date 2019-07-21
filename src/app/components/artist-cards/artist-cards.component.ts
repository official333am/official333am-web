import { Component, OnInit } from "@angular/core";
import { SafeResourceUrl, DomSanitizer } from "@angular/platform-browser";
import { FirebaseService } from "../../services/firebase/firebase.service";

@Component({
  selector: "artist-cards",
  templateUrl: "./artist-cards.component.html",
  styleUrls: ["./artist-cards.component.css"]
})
export class ArtistCardsComponent implements OnInit {
  url: SafeResourceUrl;
  firebaseArtists: any;

  constructor(
    public sanitizer: DomSanitizer,
    public firebaseService: FirebaseService
  ) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(
      "https://open.spotify.com/embed/artist/2nnK1MYUbTKOKXhJbIXpiW"
    );
  }

  async ngOnInit() {
    this.firebaseArtists = await this.firebaseService.getArtists();
  }

  openSpotifyModal(uri: string) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(
      "https://open.spotify.com/embed/artist/" + uri
    );
  }
}
