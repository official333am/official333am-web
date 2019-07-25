import { Component } from "@angular/core";
import { FirebaseService } from "./services/firebase/firebase.service";
declare var $: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  validLogin = false;
  errorsEnabled = false;
  closeEnabled = false;

  showIcons: any;

  userAuth = {
    username: "",
    password: ""
  };

  constructor(public firebaseService: FirebaseService) {
    this.showIcons = {
      username: 'none',
      auth: 'basic'
    };
  }

  async authorizeAdmin() {
    this.enableErrors();

    if (await this.firebaseService.authenticate(this.userAuth) !== -1) {
      this.showIcons = await this.firebaseService.authenticate(this.userAuth);

      this.validLogin = true;
      this.closeEnabled = true;
      this.clearLogin();
      this.disableErrors();

      $("#adminModal").modal("toggle");
    } else {
      this.validLogin = false;
      this.closeEnabled = false;
      this.clearLogin();
    }
  }

  clearLogin() {
    this.userAuth = {
      username: "",
      password: ""
    };

    this.validLogin = false;
  }

  flipFlag() {
    this.validLogin = true;
    this.disableErrors();
  }

  enableErrors() {
    this.errorsEnabled = true;
  }

  disableErrors() {
    this.errorsEnabled = false;
  }

  newLogin() {
    this.closeEnabled = false;
    this.disableErrors();
  }

  runParentTest() {
    this.showIcons = 1;
  }
}
