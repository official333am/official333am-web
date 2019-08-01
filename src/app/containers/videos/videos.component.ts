import { Component, OnInit, Input } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from "@angular/platform-browser";
import { FirebaseService } from "../../services/firebase/firebase.service";

@Component({
  selector: 'videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  @Input() showIcons: any;

  urls: SafeResourceUrl[] = [];
  videos: any;

  constructor(
    public sanitizer: DomSanitizer,
    public firebaseService: FirebaseService
  ) { }

  async ngOnInit() {
    this.videos = await this.firebaseService.getVideos();
    this.videos.forEach( video => {
      this.urls.push(this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + video));
    })
  }

}
