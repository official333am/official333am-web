(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"navbar-example2\" class=\"navbar navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" href=\"\"><h1>3:33AM MULTIMEDIA COLLECTIVE</h1></a>\r\n  <ul class=\"nav nav-pills\">\r\n    <li class=\"nav-item\"><a class=\"nav-link\" href=\"#artists\">ARTISTS</a></li>\r\n    <li class=\"nav-item\"><a class=\"nav-link\" href=\"#about-us\">ABOUT US</a></li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"#contact-us\">CONTACT US</a>\r\n    </li>\r\n    <!--\r\n      <li class=\"nav-item dropdown\">\r\n        <a\r\n          class=\"nav-link dropdown-toggle\"\r\n          data-toggle=\"dropdown\"\r\n          href=\"#\"\r\n          role=\"button\"\r\n          aria-haspopup=\"true\"\r\n          aria-expanded=\"false\"\r\n          >MORE</a\r\n        >\r\n        <div class=\"dropdown-menu\">\r\n          <a class=\"dropdown-item\" href=\"#one\">USELESS 1</a>\r\n          <a class=\"dropdown-item\" href=\"#two\">USELESS 2</a>\r\n          <div role=\"separator\" class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#three\">USELESS 3</a>\r\n        </div>\r\n      </li>\r\n    -->\r\n  </ul>\r\n</nav>\r\n<body>\r\n  <!-- <artist-carousel></artist-carousel>\r\n\r\n  <iframe\r\n    src=\"https://open.spotify.com/embed/artist/2nnK1MYUbTKOKXhJbIXpiW\"\r\n    width=\"300\"\r\n    height=\"380\"\r\n    frameborder=\"0\"\r\n    allowtransparency=\"true\"\r\n    allow=\"encrypted-media\"\r\n  ></iframe> -->\r\n  <br>\r\n  <artists id=\"artists\"></artists>\r\n  <br>\r\n  <about-us id=\"about-us\"></about-us>\r\n  <br>\r\n  <contact-us id=\"contact-us\"></contact-us>\r\n  <br>\r\n</body>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/artist-cards/artist-cards.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/artist-cards/artist-cards.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link\r\n  rel=\"stylesheet\"\r\n  href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\"\r\n/>\r\n<div *ngIf=\"firebaseArtists && firebaseArtists.length !== 0\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\" *ngFor=\"let artist of firebaseArtists\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\">{{ artist.id }}</h5>\r\n            <h6 class=\"card-subtitle mb-2 text-muted\">\r\n              {{ artist.data().type }}\r\n            </h6>\r\n            <p class=\"card-text\">\r\n              {{ artist.data().description }}\r\n            </p>\r\n            <a href=\"#\" class=\"card-link\">\r\n              <i\r\n                class=\"fa fa-spotify\"\r\n                style=\"font-size:30px;color:green\"\r\n                data-toggle=\"modal\"\r\n                data-target=\"#exampleModal\"\r\n                (click)=\"openSpotifyModal(artist.data().spotify)\"\r\n              >\r\n              </i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Modal -->\r\n<div\r\n  class=\"modal fade\"\r\n  id=\"exampleModal\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"exampleModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n        <iframe\r\n          [src]=\"url\"\r\n          width=\"100%\"\r\n          height=\"380\"\r\n          frameborder=\"0\"\r\n          allowtransparency=\"true\"\r\n          allow=\"encrypted-media\"\r\n        ></iframe>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/artist-carousel/artist-carousel.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/artist-carousel/artist-carousel.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"bd-example\">\n    <div\n      id=\"carouselExampleCaptions\"\n      class=\"carousel slide\"\n      data-ride=\"carousel\"\n    >\n      <ol class=\"carousel-indicators\">\n        <li\n          data-target=\"#carouselExampleCaptions\"\n          data-slide-to=\"0\"\n          class=\"active\"\n        ></li>\n        <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"1\"></li>\n        <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"2\"></li>\n      </ol>\n      <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\">\n          <img src=\"../../../assets/img/mikewave.jpg\" class=\"d-block w-100\" alt=\"...\" />\n          <div class=\"carousel-caption d-none d-md-block\">\n            <h5>mikewave</h5>\n            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n          </div>\n        </div>\n        <div class=\"carousel-item\">\n          <img src=\"../../../assets/img/blase.jpg\" class=\"d-block w-100\" alt=\"...\" />\n          <div class=\"carousel-caption d-none d-md-block\">\n            <h5>blasé</h5>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n          </div>\n        </div>\n        <div class=\"carousel-item\">\n          <img src=\"../../../assets/img/josepha.jpg\" class=\"d-block w-100\" alt=\"...\" />\n          <div class=\"carousel-caption d-none d-md-block\">\n            <h5>Joseph A</h5>\n            <p>\n              Praesent commodo cursus magna, vel scelerisque nisl consectetur.\n            </p>\n          </div>\n        </div>\n      </div>\n      <a\n        class=\"carousel-control-prev\"\n        href=\"#carouselExampleCaptions\"\n        role=\"button\"\n        data-slide=\"prev\"\n      >\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n      <a\n        class=\"carousel-control-next\"\n        href=\"#carouselExampleCaptions\"\n        role=\"button\"\n        data-slide=\"next\"\n      >\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/artist-info/artist-info.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/artist-info/artist-info.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"col-md-3\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/containers/about-us/about-us.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/containers/about-us/about-us.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>\n    ABOUT US\n  </h3>\n\n  Contact us pages are often the go-to for a new visitor on a mission. It’s\n  where they go when they have a question and truly want to speak to an\n  individual at your organization. They exist to serve the user with the purpose\n  of providing the user with information on how they can get in touch with you.\n  The goal of every contact us page is to convert by clearly and effectively\n  presenting the method(s) of getting in touch with a company as quickly as\n  possible. Here are a few best practices that you should keep in mind when\n  putting together your next contact us page: Contact us pages are often the\n  go-to for a new visitor on a mission. It’s where they go when they have a\n  question and truly want to speak to an individual at your organization. They\n  exist to serve the user with the purpose of providing the user with\n  information on how they can get in touch with you. The goal of every contact\n  us page is to convert by clearly and effectively presenting the method(s) of\n  getting in touch with a company as quickly as possible. Here are a few best\n  practices that you should keep in mind when putting together your next contact\n  us page: Contact us pages are often the go-to for a new visitor on a mission.\n  It’s where they go when they have a question and truly want to speak to an\n  individual at your organization. They exist to serve the user with the purpose\n  of providing the user with information on how they can get in touch with you.\n  The goal of every contact us page is to convert by clearly and effectively\n  presenting the method(s) of getting in touch with a company as quickly as\n  possible. Here are a few best practices that you should keep in mind when\n  putting together your next contact us page: Contact us pages are often the\n  go-to for a new visitor on a mission. It’s where they go when they have a\n  question and truly want to speak to an individual at your organization. They\n  exist to serve the user with the purpose of providing the user with\n  information on how they can get in touch with you. The goal of every contact\n  us page is to convert by clearly and effectively presenting the method(s) of\n  getting in touch with a company as quickly as possible. Here are a few best\n  practices that you should keep in mind when putting together your next contact\n  us page: Contact us pages are often the go-to for a new visitor on a mission.\n  It’s where they go when they have a question and truly want to speak to an\n  individual at your organization. They exist to serve the user with the purpose\n  of providing the user with information on how they can get in touch with you.\n  The goal of every contact us page is to convert by clearly and effectively\n  presenting the method(s) of getting in touch with a company as quickly as\n  possible. Here are a few best practices that you should keep in mind when\n  putting together your next contact us page:\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/containers/artists/artists.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/containers/artists/artists.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"col-md-3\">\r\n    <h3>\r\n      ARTISTS\r\n    </h3>\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n<artist-cards></artist-cards>\r\n<br>\r\n<artist-info></artist-info>\r\n<br>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/containers/contact-us/contact-us.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/containers/contact-us/contact-us.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h3>\r\n    CONTACT ME\r\n  </h3>\r\n\r\n  Contact us pages are often the go-to for a new visitor on a mission. It’s\r\n  where they go when they have a question and truly want to speak to an\r\n  individual at your organization. They exist to serve the user with the purpose\r\n  of providing the user with information on how they can get in touch with you.\r\n  The goal of every contact us page is to convert by clearly and effectively\r\n  presenting the method(s) of getting in touch with a company as quickly as\r\n  possible. Here are a few best practices that you should keep in mind when\r\n  putting together your next contact us page: Contact us pages are often the\r\n  go-to for a new visitor on a mission. It’s where they go when they have a\r\n  question and truly want to speak to an individual at your organization. They\r\n  exist to serve the user with the purpose of providing the user with\r\n  information on how they can get in touch with you. The goal of every contact\r\n  us page is to convert by clearly and effectively presenting the method(s) of\r\n  getting in touch with a company as quickly as possible. Here are a few best\r\n  practices that you should keep in mind when putting together your next contact\r\n  us page: Contact us pages are often the go-to for a new visitor on a mission.\r\n  It’s where they go when they have a question and truly want to speak to an\r\n  individual at your organization. They exist to serve the user with the purpose\r\n  of providing the user with information on how they can get in touch with you.\r\n  The goal of every contact us page is to convert by clearly and effectively\r\n  presenting the method(s) of getting in touch with a company as quickly as\r\n  possible. Here are a few best practices that you should keep in mind when\r\n  putting together your next contact us page: Contact us pages are often the\r\n  go-to for a new visitor on a mission. It’s where they go when they have a\r\n  question and truly want to speak to an individual at your organization. They\r\n  exist to serve the user with the purpose of providing the user with\r\n  information on how they can get in touch with you. The goal of every contact\r\n  us page is to convert by clearly and effectively presenting the method(s) of\r\n  getting in touch with a company as quickly as possible. Here are a few best\r\n  practices that you should keep in mind when putting together your next contact\r\n  us page:\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'official333am-web';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _containers_artists_artists_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/artists/artists.component */ "./src/app/containers/artists/artists.component.ts");
/* harmony import */ var _components_artist_cards_artist_cards_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/artist-cards/artist-cards.component */ "./src/app/components/artist-cards/artist-cards.component.ts");
/* harmony import */ var _components_artist_info_artist_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/artist-info/artist-info.component */ "./src/app/components/artist-info/artist-info.component.ts");
/* harmony import */ var _containers_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers/contact-us/contact-us.component */ "./src/app/containers/contact-us/contact-us.component.ts");
/* harmony import */ var _containers_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./containers/about-us/about-us.component */ "./src/app/containers/about-us/about-us.component.ts");
/* harmony import */ var _components_artist_carousel_artist_carousel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/artist-carousel/artist-carousel.component */ "./src/app/components/artist-carousel/artist-carousel.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _containers_artists_artists_component__WEBPACK_IMPORTED_MODULE_5__["ArtistsComponent"],
                _components_artist_cards_artist_cards_component__WEBPACK_IMPORTED_MODULE_6__["ArtistCardsComponent"],
                _components_artist_info_artist_info_component__WEBPACK_IMPORTED_MODULE_7__["ArtistInfoComponent"],
                _containers_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_8__["ContactUsComponent"],
                _containers_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__["AboutUsComponent"],
                _components_artist_carousel_artist_carousel_component__WEBPACK_IMPORTED_MODULE_10__["ArtistCarouselComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/artist-cards/artist-cards.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/artist-cards/artist-cards.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXJ0aXN0LWNhcmRzL2FydGlzdC1jYXJkcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/artist-cards/artist-cards.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/artist-cards/artist-cards.component.ts ***!
  \*******************************************************************/
/*! exports provided: ArtistCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistCardsComponent", function() { return ArtistCardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");





var ArtistCardsComponent = /** @class */ (function () {
    function ArtistCardsComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.firebaseArtists = ["artists"];
    }
    ArtistCardsComponent.prototype.ngOnInit = function () {
        var firebaseConfig = {
            apiKey: "AIzaSyBm8EcIVsLZCMAFdBRyMaMX6ICjI5-t9gc",
            authDomain: "official333am-web.firebaseapp.com",
            databaseURL: "https://official333am-web.firebaseio.com",
            projectId: "official333am-web",
            storageBucket: "",
            messagingSenderId: "539727915084",
            appId: "1:539727915084:web:7494c564765a0965"
        };
        firebase_app__WEBPACK_IMPORTED_MODULE_3__["initializeApp"](firebaseConfig);
        var db = firebase_app__WEBPACK_IMPORTED_MODULE_3__["firestore"]();
        db.collection("artists")
            .get()
            .then(function (querySnapshot) {
            this.firebaseArtists = querySnapshot.docs;
        }.bind(this));
    };
    ArtistCardsComponent.prototype.openSpotifyModal = function (uri) {
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl("https://open.spotify.com/embed/artist/" + uri);
    };
    ArtistCardsComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    ArtistCardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "artist-cards",
            template: __webpack_require__(/*! raw-loader!./artist-cards.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/artist-cards/artist-cards.component.html"),
            styles: [__webpack_require__(/*! ./artist-cards.component.css */ "./src/app/components/artist-cards/artist-cards.component.css")]
        })
    ], ArtistCardsComponent);
    return ArtistCardsComponent;
}());



/***/ }),

/***/ "./src/app/components/artist-carousel/artist-carousel.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/artist-carousel/artist-carousel.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXJ0aXN0LWNhcm91c2VsL2FydGlzdC1jYXJvdXNlbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/artist-carousel/artist-carousel.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/artist-carousel/artist-carousel.component.ts ***!
  \*************************************************************************/
/*! exports provided: ArtistCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistCarouselComponent", function() { return ArtistCarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ArtistCarouselComponent = /** @class */ (function () {
    function ArtistCarouselComponent() {
    }
    ArtistCarouselComponent.prototype.ngOnInit = function () {
    };
    ArtistCarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'artist-carousel',
            template: __webpack_require__(/*! raw-loader!./artist-carousel.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/artist-carousel/artist-carousel.component.html"),
            styles: [__webpack_require__(/*! ./artist-carousel.component.css */ "./src/app/components/artist-carousel/artist-carousel.component.css")]
        })
    ], ArtistCarouselComponent);
    return ArtistCarouselComponent;
}());



/***/ }),

/***/ "./src/app/components/artist-info/artist-info.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/artist-info/artist-info.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXJ0aXN0LWluZm8vYXJ0aXN0LWluZm8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/artist-info/artist-info.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/artist-info/artist-info.component.ts ***!
  \*****************************************************************/
/*! exports provided: ArtistInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistInfoComponent", function() { return ArtistInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");



var ArtistInfoComponent = /** @class */ (function () {
    function ArtistInfoComponent() {
    }
    ArtistInfoComponent.prototype.ngOnInit = function () {
    };
    ArtistInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "artist-info",
            template: __webpack_require__(/*! raw-loader!./artist-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/artist-info/artist-info.component.html"),
            styles: [__webpack_require__(/*! ./artist-info.component.css */ "./src/app/components/artist-info/artist-info.component.css")]
        })
    ], ArtistInfoComponent);
    return ArtistInfoComponent;
}());



/***/ }),

/***/ "./src/app/containers/about-us/about-us.component.css":
/*!************************************************************!*\
  !*** ./src/app/containers/about-us/about-us.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/containers/about-us/about-us.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/containers/about-us/about-us.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'about-us',
            template: __webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/containers/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/containers/about-us/about-us.component.css")]
        })
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/containers/artists/artists.component.css":
/*!**********************************************************!*\
  !*** ./src/app/containers/artists/artists.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvYXJ0aXN0cy9hcnRpc3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/containers/artists/artists.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/containers/artists/artists.component.ts ***!
  \*********************************************************/
/*! exports provided: ArtistsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistsComponent", function() { return ArtistsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ArtistsComponent = /** @class */ (function () {
    function ArtistsComponent() {
    }
    ArtistsComponent.prototype.ngOnInit = function () {
    };
    ArtistsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'artists',
            template: __webpack_require__(/*! raw-loader!./artists.component.html */ "./node_modules/raw-loader/index.js!./src/app/containers/artists/artists.component.html"),
            styles: [__webpack_require__(/*! ./artists.component.css */ "./src/app/containers/artists/artists.component.css")]
        })
    ], ArtistsComponent);
    return ArtistsComponent;
}());



/***/ }),

/***/ "./src/app/containers/contact-us/contact-us.component.css":
/*!****************************************************************!*\
  !*** ./src/app/containers/contact-us/contact-us.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/containers/contact-us/contact-us.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/containers/contact-us/contact-us.component.ts ***!
  \***************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'contact-us',
            template: __webpack_require__(/*! raw-loader!./contact-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/containers/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/containers/contact-us/contact-us.component.css")]
        })
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rohit\Documents\GitHub\official333am-web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map