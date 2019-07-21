import { Component, OnInit } from "@angular/core";
import * as firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
  selector: "artist-info",
  templateUrl: "./artist-info.component.html",
  styleUrls: ["./artist-info.component.css"]
})
export class ArtistInfoComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    
  }
}
