import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from "../../services/firebase/firebase.service";

@Component({
  selector: 'about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  @Input() showIcons: any;
  aboutUsData: any;
  isEditable = false;
  updatedField = "";

  constructor(public firebaseService: FirebaseService) {}

  async ngOnInit() {
    this.aboutUsData = await this.firebaseService.genericGetter('about_us');
    this.updatedField = this.aboutUsData;
  }

  editField() {
    this.isEditable = true;
    this.updatedField = this.aboutUsData;
  }

  closeEdit() {
    this.isEditable = false;
    this.updatedField = "";
  }

  updateEdit() {
    this.firebaseService.genericSetter('about_us', this.updatedField);
    this.ngOnInit();
    this.closeEdit();
  }
}
