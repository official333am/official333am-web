import { Component, OnInit } from "@angular/core";
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import * as firebase from "firebase/app";
import "firebase/firestore";
// import "firebase/auth"

@Component({
  selector: "artist-cards",
  templateUrl: "./artist-cards.component.html",
  styleUrls: ["./artist-cards.component.css"]
})
export class ArtistCardsComponent implements OnInit {
  firebaseArtists = ["test"];
  url: any;

  constructor(public sanitizer: DomSanitizer) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl("https://open.spotify.com/embed/artist/2nnK1MYUbTKOKXhJbIXpiW");
  }

  ngOnInit() {
    var firebaseConfig = {
      apiKey: "AIzaSyBm8EcIVsLZCMAFdBRyMaMX6ICjI5-t9gc",
      authDomain: "official333am-web.firebaseapp.com",
      databaseURL: "https://official333am-web.firebaseio.com",
      projectId: "official333am-web",
      storageBucket: "",
      messagingSenderId: "539727915084",
      appId: "1:539727915084:web:7494c564765a0965"
    };

    firebase.initializeApp(firebaseConfig);

    var db = firebase.firestore();

    db.collection("artists")
      .get()
      .then(function(querySnapshot) {
        this.firebaseArtists = this.formatSnapshot(querySnapshot.docs);
      }.bind(this));
  }

  formatSnapshot(array: any[]) {
    var returnArray = [];

    array.forEach(function(element) {
      returnArray.push({
        name: element.id,
        type: element.data().type,
        description: element.data().description,
        spotify: element.data().spotify
      })
    });

    return returnArray;
  }

  openSpotifyModal(uri: string) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl("https://open.spotify.com/embed/artist/" + uri);
  }
}
