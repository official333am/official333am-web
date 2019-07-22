import { Component, OnInit } from "@angular/core";
import { SafeResourceUrl, DomSanitizer } from "@angular/platform-browser";
import { FirebaseService } from "../../services/firebase/firebase.service";
declare var $: any;

@Component({
  selector: "artist-cards",
  templateUrl: "./artist-cards.component.html",
  styleUrls: ["./artist-cards.component.css"]
})
export class ArtistCardsComponent implements OnInit {
  url: SafeResourceUrl;
  firebaseArtists: any;
  searchResults: any;

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
    this.searchResults = this.firebaseArtists;
  }

  openSpotifyModal(uri: string) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(
      "https://open.spotify.com/embed/artist/" + uri
    );
  }

  updateSearch() {
    if ($("#searchBar").val() !== "") {
      this.searchResults = this.firebaseArtists.filter(
        artist =>
          artist.name.toLowerCase().indexOf(
            $("#searchBar")
              .val()
              .toLowerCase()
          ) > -1
      );
    } else {
      this.searchResults = this.firebaseArtists
    }
  }
}
