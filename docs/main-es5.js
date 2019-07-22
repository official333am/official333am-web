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

module.exports = "<!-- <div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <nav id=\"navbar-example2\" class=\"navbar navbar-light bg-light\">\r\n      <a class=\"navbar-brand\" href=\"\"><h1>3:33AM MULTIMEDIA COLLECTIVE</h1></a>\r\n      <ul class=\"nav nav-pills\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#artists\">ARTISTS</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#about-us\">ABOUT US</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#contact-us\">CONTACT US</a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n  </div>\r\n</div>   -->\r\n\r\n<!--Main Navigation-->\r\n<header>\r\n  <nav class=\"navbar navbar-dark bg-dark navbar-expand-lg scrolling-navbar\">\r\n    <strong class=\"header nav-right\" style=\"color: white\">\r\n      3:33AM MULTIMEDIA COLLECTIVE\r\n    </strong>\r\n    <button\r\n      class=\"navbar-toggler\"\r\n      type=\"button\"\r\n      data-toggle=\"collapse\"\r\n      data-target=\"#navbarSupportedContent\"\r\n      aria-controls=\"navbarSupportedContent\"\r\n      aria-expanded=\"false\"\r\n      aria-label=\"Toggle navigation\"\r\n    >\r\n      <span class=\"fa fa-bars\" style=\"color:white\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav mr-auto flex-direction\">\r\n        <li class=\"nav-item nav-tab\">\r\n          <a class=\"nav-link\" href=\"#artists\">ARTISTS</a>\r\n        </li>\r\n        <li class=\"nav-item nav-tab\">\r\n          <a class=\"nav-link\" href=\"#about-us\">ABOUT US</a>\r\n        </li>\r\n        <li class=\"nav-item nav-tab\">\r\n          <a class=\"nav-link\" href=\"#contact-us\">CONTACT US</a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"navbar-nav flex-direction\">\r\n        <li class=\"nav-item nav-tab\">\r\n          <a class=\"nav-link\"\r\n            ><i class=\"fa fa-facebook-official\" style=\"color:white\"></i\r\n          ></a>\r\n        </li>\r\n        <li class=\"nav-item nav-tab\">\r\n          <a class=\"nav-link\"\r\n            ><i class=\"fa fa-twitter\" style=\"color:white\"></i\r\n          ></a>\r\n        </li>\r\n        <li class=\"nav-item nav-tab\">\r\n          <a class=\"nav-link\"\r\n            ><i class=\"fa fa-instagram\" style=\"color:white\"></i\r\n          ></a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n</header>\r\n\r\n<main>\r\n  <br />\r\n  <artists id=\"artists\"></artists>\r\n  <br />\r\n  <about-us id=\"about-us\"></about-us>\r\n  <br />\r\n  <contact-us id=\"contact-us\"></contact-us>\r\n  <br />\r\n</main>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/artist-cards/artist-cards.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/artist-cards/artist-cards.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"firebaseArtists\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\" *ngFor=\"let artist of firebaseArtists\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <h5 *ngIf=\"artist.name\" class=\"card-title\">\r\n              {{ artist.name }}\r\n            </h5>\r\n            <h6 *ngIf=\"artist.type\" class=\"card-subtitle mb-2 text-muted\">\r\n              {{ artist.type }}\r\n            </h6>\r\n            <p *ngIf=\"artist.description\" class=\"card-text\">\r\n              {{ artist.description }}\r\n            </p>\r\n            <i\r\n              *ngIf=\"artist.spotify\"\r\n              class=\"fa fa-spotify\"\r\n              data-toggle=\"modal\"\r\n              data-target=\"#spotifyModal\"\r\n              (click)=\"openSpotifyModal(artist.spotify)\"\r\n            >\r\n              &nbsp;\r\n            </i>\r\n            <a *ngIf=\"artist.apple\" href=\"{{ artist.apple }}\" target=\"_blank\">\r\n              <i class=\"fa fa-apple\">\r\n                &nbsp;\r\n              </i>\r\n            </a>\r\n            <a\r\n              *ngIf=\"artist.facebook\"\r\n              href=\"{{ artist.facebook }}\"\r\n              target=\"_blank\"\r\n            >\r\n              <i class=\"fa fa-facebook-official\">\r\n                &nbsp;\r\n              </i>\r\n            </a>\r\n            <a\r\n              *ngIf=\"artist.twitter\"\r\n              href=\"{{ artist.twitter }}\"\r\n              target=\"_blank\"\r\n            >\r\n              <i class=\"fa fa-twitter\">\r\n                &nbsp;\r\n              </i>\r\n            </a>\r\n            <a\r\n              *ngIf=\"artist.instagram\"\r\n              href=\"{{ artist.instagram }}\"\r\n              target=\"_blank\"\r\n            >\r\n              <i class=\"fa fa-instagram\">\r\n                &nbsp;\r\n              </i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"!firebaseArtists\">\r\n  <div class=\"container\">\r\n    <span\r\n      class=\"spinner-border spinner-border-sm\"\r\n      role=\"status\"\r\n      aria-hidden=\"true\"\r\n    ></span>\r\n    Loading...\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div\r\n  class=\"modal fade\"\r\n  id=\"spotifyModal\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"spotifyModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n        <iframe\r\n          [src]=\"url\"\r\n          width=\"100%\"\r\n          height=\"380\"\r\n          frameborder=\"0\"\r\n          allowtransparency=\"true\"\r\n          allow=\"encrypted-media\"\r\n        ></iframe>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/artist-carousel/artist-carousel.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/artist-carousel/artist-carousel.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"bd-example\">\r\n    <div\r\n      id=\"carouselExampleCaptions\"\r\n      class=\"carousel slide\"\r\n      data-ride=\"carousel\"\r\n    >\r\n      <ol class=\"carousel-indicators\">\r\n        <li\r\n          data-target=\"#carouselExampleCaptions\"\r\n          data-slide-to=\"0\"\r\n          class=\"active\"\r\n        ></li>\r\n        <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"1\"></li>\r\n        <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"2\"></li>\r\n      </ol>\r\n      <div class=\"carousel-inner\">\r\n        <div class=\"carousel-item active\">\r\n          <img src=\"../../../assets/img/mikewave.jpg\" class=\"d-block w-100\" alt=\"...\" />\r\n          <div class=\"carousel-caption d-none d-md-block\">\r\n            <h5>mikewave</h5>\r\n            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"carousel-item\">\r\n          <img src=\"../../../assets/img/blase.jpg\" class=\"d-block w-100\" alt=\"...\" />\r\n          <div class=\"carousel-caption d-none d-md-block\">\r\n            <h5>blasé</h5>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"carousel-item\">\r\n          <img src=\"../../../assets/img/josepha.jpg\" class=\"d-block w-100\" alt=\"...\" />\r\n          <div class=\"carousel-caption d-none d-md-block\">\r\n            <h5>Joseph A</h5>\r\n            <p>\r\n              Praesent commodo cursus magna, vel scelerisque nisl consectetur.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <a\r\n        class=\"carousel-control-prev\"\r\n        href=\"#carouselExampleCaptions\"\r\n        role=\"button\"\r\n        data-slide=\"prev\"\r\n      >\r\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Previous</span>\r\n      </a>\r\n      <a\r\n        class=\"carousel-control-next\"\r\n        href=\"#carouselExampleCaptions\"\r\n        role=\"button\"\r\n        data-slide=\"next\"\r\n      >\r\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Next</span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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

module.exports = "<div class=\"container\">\r\n  <h3>\r\n    ABOUT US\r\n  </h3>\r\n\r\n  Contact us pages are often the go-to for a new visitor on a mission. It’s\r\n  where they go when they have a question and truly want to speak to an\r\n  individual at your organization. They exist to serve the user with the purpose\r\n  of providing the user with information on how they can get in touch with you.\r\n  The goal of every contact us page is to convert by clearly and effectively\r\n  presenting the method(s) of getting in touch with a company as quickly as\r\n  possible. Here are a few best practices that you should keep in mind when\r\n  putting together your next contact us page: Contact us pages are often the\r\n  go-to for a new visitor on a mission. It’s where they go when they have a\r\n  question and truly want to speak to an individual at your organization. They\r\n  exist to serve the user with the purpose of providing the user with\r\n  information on how they can get in touch with you. The goal of every contact\r\n  us page is to convert by clearly and effectively presenting the method(s) of\r\n  getting in touch with a company as quickly as possible. Here are a few best\r\n  practices that you should keep in mind when putting together your next contact\r\n  us page: Contact us pages are often the go-to for a new visitor on a mission.\r\n  It’s where they go when they have a question and truly want to speak to an\r\n  individual at your organization. They exist to serve the user with the purpose\r\n  of providing the user with information on how they can get in touch with you.\r\n  The goal of every contact us page is to convert by clearly and effectively\r\n  presenting the method(s) of getting in touch with a company as quickly as\r\n  possible. Here are a few best practices that you should keep in mind when\r\n  putting together your next contact us page: Contact us pages are often the\r\n  go-to for a new visitor on a mission. It’s where they go when they have a\r\n  question and truly want to speak to an individual at your organization. They\r\n  exist to serve the user with the purpose of providing the user with\r\n  information on how they can get in touch with you. The goal of every contact\r\n  us page is to convert by clearly and effectively presenting the method(s) of\r\n  getting in touch with a company as quickly as possible. Here are a few best\r\n  practices that you should keep in mind when putting together your next contact\r\n  us page: Contact us pages are often the go-to for a new visitor on a mission.\r\n  It’s where they go when they have a question and truly want to speak to an\r\n  individual at your organization. They exist to serve the user with the purpose\r\n  of providing the user with information on how they can get in touch with you.\r\n  The goal of every contact us page is to convert by clearly and effectively\r\n  presenting the method(s) of getting in touch with a company as quickly as\r\n  possible. Here are a few best practices that you should keep in mind when\r\n  putting together your next contact us page:\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/containers/artists/artists.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/containers/artists/artists.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h3>\r\n    ARTISTS\r\n  </h3>\r\n</div>\r\n\r\n<br />\r\n<artist-cards></artist-cards>\r\n<br />\r\n<artist-info></artist-info>\r\n<br />\r\n"

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
/* harmony import */ var _services_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/firebase/firebase.service */ "./src/app/services/firebase/firebase.service.ts");




var ArtistCardsComponent = /** @class */ (function () {
    function ArtistCardsComponent(sanitizer, firebaseService) {
        this.sanitizer = sanitizer;
        this.firebaseService = firebaseService;
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl("https://open.spotify.com/embed/artist/2nnK1MYUbTKOKXhJbIXpiW");
    }
    ArtistCardsComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.firebaseService.getArtists()];
                    case 1:
                        _a.firebaseArtists = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ArtistCardsComponent.prototype.openSpotifyModal = function (uri) {
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl("https://open.spotify.com/embed/artist/" + uri);
    };
    ArtistCardsComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
        { type: _services_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] }
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
    ArtistsComponent.prototype.ngOnInit = function () { };
    ArtistsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "artists",
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

/***/ "./src/app/services/firebase/firebase.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/firebase/firebase.service.ts ***!
  \*******************************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");




var FirebaseService = /** @class */ (function () {
    function FirebaseService() {
        var firebaseConfig = {
            apiKey: "AIzaSyBm8EcIVsLZCMAFdBRyMaMX6ICjI5-t9gc",
            authDomain: "official333am-web.firebaseapp.com",
            databaseURL: "https://official333am-web.firebaseio.com",
            projectId: "official333am-web",
            storageBucket: "",
            messagingSenderId: "539727915084",
            appId: "1:539727915084:web:7494c564765a0965"
        };
        this.db = firebase_app__WEBPACK_IMPORTED_MODULE_2__["initializeApp"](firebaseConfig).firestore();
    }
    FirebaseService.prototype.getArtists = function () {
        return new Promise(function (resolve, reject) {
            this.db
                .collection("artists")
                .get()
                .then(function (querySnapshot) {
                resolve(this.formatSnapshot(querySnapshot.docs));
            }.bind(this));
        }.bind(this));
    };
    FirebaseService.prototype.formatSnapshot = function (artists) {
        var artistsArray = [];
        artists.forEach(function (element) {
            artistsArray.push({
                name: element.id,
                type: element.data().type,
                description: element.data().description,
                spotify: element.data().spotify,
                apple: element.data().apple,
                facebook: element.data().facebook,
                twitter: element.data().twitter,
                instagram: element.data().instagram
            });
        });
        return artistsArray;
    };
    FirebaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        })
    ], FirebaseService);
    return FirebaseService;
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