import { Component, OnInit, Input } from "@angular/core";
import { SafeResourceUrl, DomSanitizer } from "@angular/platform-browser";
import { FirebaseService } from "../../services/firebase/firebase.service";
declare var $: any;

@Component({
  selector: "artists",
  templateUrl: "./artists.component.html",
  styleUrls: ["./artists.component.css"]
})
export class ArtistsComponent implements OnInit {
  @Input() showIcons: any;

  url: SafeResourceUrl;
  firebaseArtists: any;
  searchResults: any;
  showBar: boolean;
  flipButton: boolean;
  
  editObject = {
    id: undefined,
    name: undefined,
    type: undefined,
    description: undefined
  };

  constructor(
    public sanitizer: DomSanitizer,
    public firebaseService: FirebaseService
  ) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(
      "https://open.spotify.com/embed/artist/2nnK1MYUbTKOKXhJbIXpiW"
    );
  }

  async ngOnInit() {
    this.firebaseArtists = await this.firebaseService.getArtistsRealtime();
    this.searchResults = this.firebaseArtists;

    if ($(window).width() < 768) {
      this.flipButton = false;
      this.showBar = false;
    } else {
      this.showBar = true;
    }
  }

  openSpotifyModal(uri: string) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(
      "https://open.spotify.com/embed/artist/" + uri
    );
  }

  updateSearch() {
    if ($("#searchBar").val() && $("#searchBar").val() !== "") {
      this.searchResults = this.firebaseArtists.filter(
        artist =>
          artist.name.toLowerCase().indexOf(
            $("#searchBar")
              .val()
              .toLowerCase()
          ) > -1
      );
      this.flipButton = true;
    } else {
      this.searchResults = this.firebaseArtists;

      if ($(window).width() < 768 && this.flipButton) {
        this.flipButton = false;
      } else if ($(window).width() < 768) {
        this.flipButton = true;
      } else {
        this.flipButton = false;
      }
    }
  }

  showSearchBar() {
    if (
      $("#searchBar").val() &&
      $("#searchBar").val() !== "" &&
      $(window).width() < 768
    ) {
      // does nothing...yet...
    } else if ($(window).width() < 768) {
      this.showBar = !this.showBar;

      if (!this.showBar) {
        this.searchResults = this.firebaseArtists;
      }
    }
  }

  toggleIcon() {
    if (
      $("#searchBar").val() &&
      $("#searchBar").val() !== "" &&
      $(window).width() < 768
    ) {
      this.flipButton = !this.flipButton;
    }

    if (this.flipButton) {
      this.flipButton = !this.flipButton;
    }

    if (!this.flipButton) {
      $("#searchBar").val("");
      this.searchResults = this.firebaseArtists;
    }
  }

  editArtist(id: number, artist: any) {
    this.editObject.id = id,
    this.editObject.name = artist.name;
    this.editObject.type = artist.type;
    this.editObject.description = artist.description;
  }

  updateArtist() {
    this.firebaseService.updateArtist(this.editObject);
    this.ngOnInit();
  }
}
