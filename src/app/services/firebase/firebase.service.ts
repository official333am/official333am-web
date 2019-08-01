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

  async authenticate(userAuth: any): Promise<{}> {
    var array: any = await this.getArtistsRealtime();

    for(var i=0; i<array.length; i++) {
      if (userAuth.username === array[i].username && userAuth.password === array[i].password) {
        return {
          username: array[i].username,
          auth: array[i].auth
        };
      }
    }

    return -1;
  }

  updateArtist(userInfo: any): Promise<{}> {
    return new Promise(
      function(resolve) {
        this.realtime.ref("artists/" + userInfo.id).update({
          name: userInfo.name,
          type: userInfo.type,
          description: userInfo.description
        });

        resolve(true);
      }.bind(this)
    );
  }

  getArtistsRealtime(): Promise<{}> {
    return new Promise(
      function(resolve) {
        this.realtime.ref("artists/").once("value", function(snapshot) {
          var array = [];
          snapshot.forEach(function(_child) {
            array.push(_child.val());
          });

          resolve(array);
        });
      }.bind(this)
    );
  }

  getVideos(): Promise<{}> {
    return new Promise(
      function(resolve) {
        this.realtime.ref("videos/").once("value", function(snapshot) {
          var array = [];
          snapshot.forEach(function(_child) {
            array.push(_child.val());
          });

          resolve(array);
        });
      }.bind(this)
    );
  }

  genericSetter(key: string, update: string): Promise<{}> {
    return new Promise(
      function(resolve) {
        this.realtime.ref(key + "/").update({
          value: update
        });

        resolve(true);
      }.bind(this)
    );
  }

  genericGetter(key: string): Promise<{}> {
    return new Promise(
      function(resolve) {
        this.realtime.ref(key + "/").once("value", function(snapshot) {
          resolve(snapshot.val().value);
        });
      }.bind(this)
    );
  }

}
