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

module.exports = "<nav id=\"navbar-example2\" class=\"navbar navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" href=\"\"\r\n    ><h1>\r\n      3:33AM MULTIMEDIA COLLECTIVE\r\n    </h1></a\r\n  >\r\n  <ul class=\"nav nav-pills\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"#artists\">ARTISTS</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"#about-us\">ABOUT US</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"#contact-us\">CONTACT US</a>\r\n    </li>\r\n    <!-- <li class=\"nav-item dropdown\">\r\n      <a\r\n        class=\"nav-link dropdown-toggle\"\r\n        data-toggle=\"dropdown\"\r\n        href=\"#\"\r\n        role=\"button\"\r\n        aria-haspopup=\"true\"\r\n        aria-expanded=\"false\"\r\n        >MORE</a\r\n      >\r\n      <div class=\"dropdown-menu\">\r\n        <a class=\"dropdown-item\" href=\"#one\">USELESS 1</a>\r\n        <a class=\"dropdown-item\" href=\"#two\">USELESS 2</a>\r\n        <div role=\"separator\" class=\"dropdown-divider\"></div>\r\n        <a class=\"dropdown-item\" href=\"#three\">USELESS 3</a>\r\n      </div>\r\n    </li> -->\r\n  </ul>\r\n</nav>\r\n<body>\r\n  <artist-carousel></artist-carousel>\r\n\r\n  <artists id=\"artists\"></artists>\r\n\r\n  <about-us id=\"about-us\"></about-us>\r\n\r\n  <contact-us id=\"contact-us\"></contact-us>\r\n</body>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/artist-cards/artist-cards.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/artist-cards/artist-cards.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-md-3\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Stretch Dynamo</h5>\n        <h6 class=\"card-subtitle mb-2 text-muted\">Rapper</h6>\n        <p class=\"card-text\">\n          This is a sample card for rapper Stretch Baby Rays\n        </p>\n        <a href=\"#\" class=\"card-link\">Card link</a>\n        <a href=\"#\" class=\"card-link\">Another link</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

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

module.exports = "<div class=\"container\">\n  <div class=\"col-md-3\">\n    can we get some artist info?\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/containers/about-us/about-us.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/containers/about-us/about-us.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-md-3\">\n    <h3>\n      ABOUT US PAGE\n    </h3>\n  </div>\n\n  Contact us pages are often the go-to for a new visitor on a mission. It’s where they go when they have a question and truly want to speak to an individual at your organization.\n\nThey exist to serve the user with the purpose of providing the user with information on how they can get in touch with you.\n\nThe goal of every contact us page is to convert by clearly and effectively presenting the method(s) of getting in touch with a company as quickly as possible.\n\nHere are a few best practices that you should keep in mind when putting together your next contact us page:\nContact us pages are often the go-to for a new visitor on a mission. It’s where they go when they have a question and truly want to speak to an individual at your organization.\n\nThey exist to serve the user with the purpose of providing the user with information on how they can get in touch with you.\n\nThe goal of every contact us page is to convert by clearly and effectively presenting the method(s) of getting in touch with a company as quickly as possible.\n\nHere are a few best practices that you should keep in mind when putting together your next contact us page:\nContact us pages are often the go-to for a new visitor on a mission. It’s where they go when they have a question and truly want to speak to an individual at your organization.\n\nThey exist to serve the user with the purpose of providing the user with information on how they can get in touch with you.\n\nThe goal of every contact us page is to convert by clearly and effectively presenting the method(s) of getting in touch with a company as quickly as possible.\n\nHere are a few best practices that you should keep in mind when putting together your next contact us page:\nContact us pages are often the go-to for a new visitor on a mission. It’s where they go when they have a question and truly want to speak to an individual at your organization.\n\nThey exist to serve the user with the purpose of providing the user with information on how they can get in touch with you.\n\nThe goal of every contact us page is to convert by clearly and effectively presenting the method(s) of getting in touch with a company as quickly as possible.\n\nHere are a few best practices that you should keep in mind when putting together your next contact us page:\nContact us pages are often the go-to for a new visitor on a mission. It’s where they go when they have a question and truly want to speak to an individual at your organization.\n\nThey exist to serve the user with the purpose of providing the user with information on how they can get in touch with you.\n\nThe goal of every contact us page is to convert by clearly and effectively presenting the method(s) of getting in touch with a company as quickly as possible.\n\nHere are a few best practices that you should keep in mind when putting together your next contact us page:\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/containers/artists/artists.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/containers/artists/artists.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"col-md-3\">\r\n    <h3>\r\n      ARTIST PAGE\r\n    </h3>\r\n  </div>\r\n</div>\r\n\r\n<artist-cards></artist-cards>\r\n\r\n<artist-info></artist-info>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/containers/contact-us/contact-us.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/containers/contact-us/contact-us.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"col-md-3\">\r\n    <h3>CONTACT ME FOO</h3>\r\n  </div>\r\n\r\n  Contact us pages are often the go-to for a new visitor on a mission. It’s where they go when they have a question and truly want to speak to an individual at your organization.\r\n\r\nThey exist to serve the user with the purpose of providing the user with information on how they can get in touch with you.\r\n\r\nThe goal of every contact us page is to convert by clearly and effectively presenting the method(s) of getting in touch with a company as quickly as possible.\r\n\r\nHere are a few best practices that you should keep in mind when putting together your next contact us page:\r\nContact us pages are often the go-to for a new visitor on a mission. It’s where they go when they have a question and truly want to speak to an individual at your organization.\r\n\r\nThey exist to serve the user with the purpose of providing the user with information on how they can get in touch with you.\r\n\r\nThe goal of every contact us page is to convert by clearly and effectively presenting the method(s) of getting in touch with a company as quickly as possible.\r\n\r\nHere are a few best practices that you should keep in mind when putting together your next contact us page:\r\nContact us pages are often the go-to for a new visitor on a mission. It’s where they go when they have a question and truly want to speak to an individual at your organization.\r\n\r\nThey exist to serve the user with the purpose of providing the user with information on how they can get in touch with you.\r\n\r\nThe goal of every contact us page is to convert by clearly and effectively presenting the method(s) of getting in touch with a company as quickly as possible.\r\n\r\nHere are a few best practices that you should keep in mind when putting together your next contact us page:\r\nContact us pages are often the go-to for a new visitor on a mission. It’s where they go when they have a question and truly want to speak to an individual at your organization.\r\n\r\nThey exist to serve the user with the purpose of providing the user with information on how they can get in touch with you.\r\n\r\nThe goal of every contact us page is to convert by clearly and effectively presenting the method(s) of getting in touch with a company as quickly as possible.\r\n\r\nHere are a few best practices that you should keep in mind when putting together your next contact us page:\r\n</div>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'official333am-web';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _containers_artists_artists_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/artists/artists.component */ "./src/app/containers/artists/artists.component.ts");
/* harmony import */ var _components_artist_cards_artist_cards_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/artist-cards/artist-cards.component */ "./src/app/components/artist-cards/artist-cards.component.ts");
/* harmony import */ var _components_artist_info_artist_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/artist-info/artist-info.component */ "./src/app/components/artist-info/artist-info.component.ts");
/* harmony import */ var _containers_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers/contact-us/contact-us.component */ "./src/app/containers/contact-us/contact-us.component.ts");
/* harmony import */ var _containers_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./containers/about-us/about-us.component */ "./src/app/containers/about-us/about-us.component.ts");
/* harmony import */ var _components_artist_carousel_artist_carousel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/artist-carousel/artist-carousel.component */ "./src/app/components/artist-carousel/artist-carousel.component.ts");











let AppModule = class AppModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ArtistCardsComponent = class ArtistCardsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ArtistCardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'artist-cards',
        template: __webpack_require__(/*! raw-loader!./artist-cards.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/artist-cards/artist-cards.component.html"),
        styles: [__webpack_require__(/*! ./artist-cards.component.css */ "./src/app/components/artist-cards/artist-cards.component.css")]
    })
], ArtistCardsComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ArtistCarouselComponent = class ArtistCarouselComponent {
    constructor() { }
    ngOnInit() {
    }
};
ArtistCarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'artist-carousel',
        template: __webpack_require__(/*! raw-loader!./artist-carousel.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/artist-carousel/artist-carousel.component.html"),
        styles: [__webpack_require__(/*! ./artist-carousel.component.css */ "./src/app/components/artist-carousel/artist-carousel.component.css")]
    })
], ArtistCarouselComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ArtistInfoComponent = class ArtistInfoComponent {
    constructor() { }
    ngOnInit() {
    }
};
ArtistInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'artist-info',
        template: __webpack_require__(/*! raw-loader!./artist-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/artist-info/artist-info.component.html"),
        styles: [__webpack_require__(/*! ./artist-info.component.css */ "./src/app/components/artist-info/artist-info.component.css")]
    })
], ArtistInfoComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutUsComponent = class AboutUsComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'about-us',
        template: __webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/containers/about-us/about-us.component.html"),
        styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/containers/about-us/about-us.component.css")]
    })
], AboutUsComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ArtistsComponent = class ArtistsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ArtistsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'artists',
        template: __webpack_require__(/*! raw-loader!./artists.component.html */ "./node_modules/raw-loader/index.js!./src/app/containers/artists/artists.component.html"),
        styles: [__webpack_require__(/*! ./artists.component.css */ "./src/app/containers/artists/artists.component.css")]
    })
], ArtistsComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactUsComponent = class ContactUsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'contact-us',
        template: __webpack_require__(/*! raw-loader!./contact-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/containers/contact-us/contact-us.component.html"),
        styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/containers/contact-us/contact-us.component.css")]
    })
], ContactUsComponent);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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
//# sourceMappingURL=main-es2015.js.map