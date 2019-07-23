import { Injectable } from "@angular/core";
import * as firebase from "firebase/app";
import "firebase/database";

@Injectable({
  providedIn: "root"
})
export class FirebaseService {
  realtime: firebase.database.Database;

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

    this.realtime = firebase.initializeApp(firebaseConfig).database();
  }

  getArtistsRealtime(): Promise<{}> {
    return new Promise(
      function(resolve) {
        this.realtime
          .ref('/artists/').once('value', function(snapshot){
            var array = [];
            snapshot.forEach(function(_child){
                array.push(_child.val());
            });

            resolve(array);
        });
      }.bind(this)
    );
  }
}
