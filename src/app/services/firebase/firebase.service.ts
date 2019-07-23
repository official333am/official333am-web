import { Injectable } from "@angular/core";
import * as firebase from "firebase/app";
import "firebase/firestore";

@Injectable({
  providedIn: "root"
})
export class FirebaseService {
  firestore: firebase.firestore.Firestore;
  realtime: any;

  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyBm8EcIVsLZCMAFdBRyMaMX6ICjI5-t9gc",
      authDomain: "official333am-web.firebaseapp.com",
      databaseURL: "https://official333am-web.firebaseio.com",
      projectId: "official333am-web",
      storageBucket: "",
      messagingSenderId: "539727915084",
      appId: "1:539727915084:web:7494c564765a0965"
    };

    this.firestore = firebase.initializeApp(firebaseConfig).firestore();
    this.realtime = firebase.initializeApp(firebaseConfig).database();
  }

  getArtistsFirestore(): Promise<{}> {
    return new Promise(
      function(resolve) {
        this.firestore
          .collection("artists")
          .get()
          .then(
            function(querySnapshot) {
              resolve(this.formatSnapshot(querySnapshot.docs));
            }.bind(this)
          );
      }.bind(this)
    );
  }

  getArtistsRealtime(): Promise<{}> {
    return new Promise(
      function(resolve) {
        this.realtime
          .ref('/artists/')
          .then(
            function(querySnapshot) {
              resolve(this.formatSnapshot(querySnapshot.docs));
            }.bind(this)
          );
      }.bind(this)
    );
  }

  formatSnapshot(artists: any[]) {
    var artistsArray = [];

    artists.forEach(function(element) {
      artistsArray.push({
        name: element.id,
        type: element.data().type,
        description: element.data().description,
        spotify: element.data().spotify,
        apple: element.data().apple,
        facebook: element.data().facebook,
        twitter: element.data().twitter,
        instagram: element.data().instagram
      });
    });

    return artistsArray;
  }
}
