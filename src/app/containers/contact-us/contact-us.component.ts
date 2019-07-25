import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from "../../services/firebase/firebase.service";

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  @Input() showIcons: any;
  contactUsData: any;
  isEditable = false;
  updatedField = "";

  constructor(public firebaseService: FirebaseService) {}

  async ngOnInit() {
    this.contactUsData = await this.firebaseService.genericGetter('contact_us');
    this.updatedField = this.contactUsData;
  }

  editField() {
    this.isEditable = true;
    this.updatedField = this.contactUsData;
  }

  closeEdit() {
    this.isEditable = false;
    this.updatedField = "";
  }

  updateEdit() {
    this.firebaseService.genericSetter('contact_us', this.updatedField);
    this.ngOnInit();
    this.closeEdit();
  }
}