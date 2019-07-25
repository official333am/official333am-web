import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "artists",
  templateUrl: "./artists.component.html",
  styleUrls: ["./artists.component.css"]
})
export class ArtistsComponent implements OnInit {
  @Input() showIcons: number;

  constructor() {}

  ngOnInit() {}
}
