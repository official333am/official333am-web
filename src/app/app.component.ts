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

    if (sessionStorage.getItem("username333") && sessionStorage.getItem("password333")) {
      this.userAuth = {
        username: sessionStorage.getItem("username333"),
        password: sessionStorage.getItem("password333")
      };

      this.authorizeAdmin();
    }
  }

  async authorizeAdmin(setting?: number) {
    this.enableErrors();

    if (await this.firebaseService.authenticate(this.userAuth) !== -1) {
      this.showIcons = await this.firebaseService.authenticate(this.userAuth);
      sessionStorage.setItem("username333", this.userAuth.username);
      sessionStorage.setItem("password333", this.userAuth.password);
      this.validLogin = true;
      this.closeEnabled = true;
      this.clearLogin();
      this.disableErrors();

      if (setting) {
        $("#adminModal").modal("toggle");
      }
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

  closeTwitterNetworking() {
    $("#twitterModal").modal("toggle");
  }
}
