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

module.exports = "<header>\r\n  <nav class=\"navbar navbar-dark bg-dark navbar-expand-lg scrolling-navbar\">\r\n    <strong class=\"header nav-right\" style=\"color: white\">\r\n      3:33AM MULTIMEDIA COLLECTIVE\r\n    </strong>\r\n    <div class=\"navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav mr-auto flex-direction\">\r\n        <li class=\"nav-item nav-tab\">\r\n          <a class=\"nav-link\" href=\"#artists\">ARTISTS</a>\r\n        </li>\r\n        <li class=\"nav-item nav-tab\">\r\n          <a class=\"nav-link\" href=\"#videos\">VIDEOS</a>\r\n        </li>\r\n        <li class=\"nav-item nav-tab\">\r\n          <a class=\"nav-link\" href=\"#about-us\">ABOUT</a>\r\n        </li>\r\n        <li class=\"nav-item nav-tab\">\r\n          <a class=\"nav-link\" href=\"#contact-us\">CONTACT</a>\r\n        </li>\r\n        <li class=\"nav-item nav-tab\">\r\n          <a\r\n            class=\"nav-link\"\r\n            href=\"#\"\r\n            data-toggle=\"modal\"\r\n            data-target=\"#adminModal\"\r\n            (click)=\"newLogin();\"\r\n            >ADMIN</a\r\n          >\r\n        </li>\r\n      </ul>\r\n      <ul class=\"navbar-nav flex-direction\">\r\n        <li class=\"nav-item nav-tab\">\r\n          <a\r\n            class=\"nav-link\"\r\n            href=\"https://www.instagram.com/official333am/?hl=en\"\r\n            target=\"_blank\"\r\n            ><i class=\"fa fa-spotify\" style=\"color:white\">&nbsp;</i></a\r\n          >\r\n        </li>\r\n        <li class=\"nav-item nav-tab\">\r\n          <a\r\n            class=\"nav-link\"\r\n            href=\"https://www.instagram.com/official333am/?hl=en\"\r\n            target=\"_blank\"\r\n            ><i class=\"fa fa-apple\" style=\"color:white\">&nbsp;</i></a\r\n          >\r\n        </li>\r\n        <li class=\"nav-item nav-tab\">\r\n          <a\r\n            class=\"nav-link\"\r\n            href=\"https://www.instagram.com/official333am/?hl=en\"\r\n            target=\"_blank\"\r\n            ><i class=\"fa fa-facebook-official\" style=\"color:white\"\r\n              >&nbsp;</i\r\n            ></a\r\n          >\r\n        </li>\r\n        <li class=\"nav-item nav-tab\">\r\n          <a\r\n            class=\"nav-link\"\r\n            href=\"https://www.instagram.com/official333am/?hl=en\"\r\n            target=\"_blank\"\r\n            ><i class=\"fa fa-twitter\" style=\"color:white\">&nbsp;</i></a\r\n          >\r\n        </li>\r\n        <li class=\"nav-item nav-tab\">\r\n          <a\r\n            class=\"nav-link\"\r\n            href=\"https://www.instagram.com/official333am/?hl=en\"\r\n            target=\"_blank\"\r\n            ><i class=\"fa fa-instagram\" style=\"color:white\">&nbsp;</i></a\r\n          >\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n</header>\r\n<main>\r\n  <br />\r\n  <twitter-networking *ngIf=\"showIcons.auth === 'admin'\"></twitter-networking>\r\n  <br /> <!-- YUCK FIX THIS -->\r\n  <artists id=\"artists\" [showIcons]=\"showIcons\"></artists>\r\n  <br /> <!-- YUCK FIX THIS -->\r\n  <br /> <!-- YUCK FIX THIS -->\r\n  <videos id=\"videos\" [showIcons]=\"showIcons\"></videos>\r\n  <br /> <!-- YUCK FIX THIS -->\r\n  <br /> <!-- YUCK FIX THIS -->\r\n  <about-us id=\"about-us\" [showIcons]=\"showIcons\"></about-us>\r\n  <br /> <!-- YUCK FIX THIS -->\r\n  <br /> <!-- YUCK FIX THIS -->\r\n  <contact-us id=\"contact-us\" [showIcons]=\"showIcons\"></contact-us>\r\n  <br /> <!-- YUCK FIX THIS -->\r\n  <br /> <!-- YUCK FIX THIS -->\r\n  <br /> <!-- YUCK FIX THIS -->\r\n  <br /> <!-- YUCK FIX THIS -->\r\n  <br /> <!-- YUCK FIX THIS -->\r\n</main>\r\n\r\n<!-- Modal -->\r\n<div\r\n  class=\"modal fade\"\r\n  style=\"margin-top: 5%;\"\r\n  id=\"adminModal\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"adminModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">ADMIN LOGIN</h5>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-3 col-form-label\">USERNAME</label>\r\n          <div class=\"col-sm-9\">\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              placeholder=\"ENTER USERNAME\"\r\n              (input)=\"userAuth.username = $event.target.value\"\r\n              (focus)=\"flipFlag()\"\r\n              [value]=\"userAuth.username\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-3 col-form-label\">PASSWORD</label>\r\n          <div class=\"col-sm-9\">\r\n            <input\r\n              type=\"password\"\r\n              class=\"form-control\"\r\n              placeholder=\"ENTER PASSWORD\"\r\n              (input)=\"userAuth.password = $event.target.value\"\r\n              (focus)=\"flipFlag()\"\r\n              [value]=\"userAuth.password\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-1\"></div>\r\n          <small \r\n            class=\"col-sm-10\" \r\n            style=\"color: red\"\r\n            *ngIf=\"!validLogin && errorsEnabled\">\r\n            The username/password combination does exist in our records.\r\n          </small>\r\n          <div class=\"col-sm-1\"></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn\" data-dismiss=\"modal\" (click)=\"disableErrors(); clearLogin();\">\r\n          CLOSE\r\n        </button>\r\n        <button \r\n          *ngIf=\"closeEnabled\"\r\n          type=\"button\"\r\n          class=\"btn\"\r\n          data-dismiss=\"modal\"\r\n          (click)=\"authorizeAdmin(1)\"\r\n        >\r\n          LOGIN\r\n        </button>\r\n        <button\r\n          *ngIf=\"!closeEnabled\"\r\n          type=\"button\"\r\n          class=\"btn\"\r\n          (click)=\"authorizeAdmin(1)\"\r\n        >\r\n          LOGIN\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/containers/about-us/about-us.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/containers/about-us/about-us.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h3>\r\n    ABOUT\r\n    <i\r\n      *ngIf=\"showIcons.auth === 'admin'\"\r\n      style=\"cursor: pointer; font-size: 20px;\"\r\n      class=\"fa fa-edit\"\r\n      (click)=\"editField();\"\r\n    ></i>\r\n  </h3>\r\n\r\n  <div *ngIf=\"!isEditable\">\r\n    {{ aboutUsData }}\r\n  </div>\r\n  <textarea\r\n    *ngIf=\"isEditable\"\r\n    rows=\"5\"\r\n    style=\"width: 100%\"\r\n    [value]=\"updatedField\"\r\n    (input)=\"updatedField = $event.target.value\">\r\n  </textarea>\r\n  <button *ngIf=\"isEditable\" type=\"button\" class=\"btn pull-right\" (click)=\"updateEdit()\">UPDATE</button>\r\n  <button *ngIf=\"isEditable\" type=\"button\" class=\"btn pull-right\" (click)=\"closeEdit()\">CLOSE</button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/containers/artists/artists.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/containers/artists/artists.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-3 col-md-6\"><h3>ARTIST PROFILES</h3></div>\r\n    <div class=\"offset-2 offset-md-2\"></div>\r\n    <div class=\"col-7 col-md-4\">\r\n      <div class=\"row\">\r\n        <div class=\"col-10 col-md-11\">\r\n          <input\r\n            *ngIf=\"showBar\"\r\n            id=\"searchBar\"\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            placeholder=\"Search Artists\"\r\n            (keyup)=\"updateSearch()\"\r\n          />\r\n        </div>\r\n        <div class=\"col-2 col-md-1\" style=\"padding: 0;\">\r\n          <a\r\n            id=\"searchButton\"\r\n            class=\"btn\"\r\n            style=\"padding-left: 0; cursor: pointer;\"\r\n            (click)=\"showSearchBar(); toggleIcon()\"\r\n          >\r\n            <i\r\n              *ngIf=\"!flipButton\"\r\n              class=\"fa fa-search\"\r\n              style=\"font-size: 20px; color: #343a40\"\r\n            >\r\n            </i>\r\n            <i\r\n              *ngIf=\"flipButton\"\r\n              class=\"fa fa-times\"\r\n              style=\"font-size: 20px; color: #343a40\"\r\n            >\r\n            </i>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br />\r\n<div *ngIf=\"searchResults\">\r\n  <div class=\"container\">\r\n    <div class=\"horiz-scroll\">\r\n      <div\r\n        class=\"card\"\r\n        style=\"height: auto;\"\r\n        *ngFor=\"let artist of searchResults; index as i\"\r\n      >\r\n        <img\r\n          class=\"card-img-top\"\r\n          src=\"../../../assets/img/{{ artist.profile_picture }}\"\r\n          style=\"width: 286px; height: 180px;\"\r\n          alt=\"{{ artist.name }}\"\r\n        />\r\n        <div class=\"card-body\">\r\n          <h5 *ngIf=\"artist.name\" class=\"card-title\">\r\n            {{ artist.name }}\r\n            <i\r\n              *ngIf=\"\r\n                showIcons.username === artist.username ||\r\n                showIcons.auth === 'admin'\r\n              \"\r\n              style=\"cursor: pointer\"\r\n              class=\"fa fa-edit\"\r\n              data-toggle=\"modal\"\r\n              data-target=\"#editArtistModal\"\r\n              (click)=\"editArtist(i, artist)\"\r\n            >\r\n            </i>\r\n          </h5>\r\n          <h6 *ngIf=\"artist.type\" class=\"card-subtitle mb-2 text-muted\">\r\n            {{ artist.type }}\r\n          </h6>\r\n          <p *ngIf=\"artist.description\" class=\"card-text\">\r\n            {{ artist.description | slice: 0:100 }}... <a href=\"#\">Read More</a>\r\n          </p>\r\n          <i\r\n            *ngIf=\"artist.spotify\"\r\n            class=\"fa fa-spotify\"\r\n            data-toggle=\"modal\"\r\n            data-target=\"#spotifyModal\"\r\n            (click)=\"openSpotifyModal(artist.spotify)\"\r\n          >\r\n            &nbsp;\r\n          </i>\r\n          <a *ngIf=\"artist.apple\" href=\"{{ artist.apple }}\" target=\"_blank\">\r\n            <i class=\"fa fa-apple\"> &nbsp; </i>\r\n          </a>\r\n          <a\r\n            *ngIf=\"artist.facebook\"\r\n            href=\"{{ artist.facebook }}\"\r\n            target=\"_blank\"\r\n          >\r\n            <i class=\"fa fa-facebook-official\"> &nbsp; </i>\r\n          </a>\r\n          <a *ngIf=\"artist.twitter\" href=\"{{ artist.twitter }}\" target=\"_blank\">\r\n            <i class=\"fa fa-twitter\"> &nbsp; </i>\r\n          </a>\r\n          <a\r\n            *ngIf=\"artist.instagram\"\r\n            href=\"{{ artist.instagram }}\"\r\n            target=\"_blank\"\r\n          >\r\n            <i class=\"fa fa-instagram\"> &nbsp; </i>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"!searchResults\">\r\n  <div class=\"container\">\r\n    <span\r\n      class=\"spinner-border spinner-border-sm\"\r\n      role=\"status\"\r\n      aria-hidden=\"true\"\r\n    ></span>\r\n    Loading...\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"searchResults && searchResults.length === 0\">\r\n  <div class=\"container\">\r\n    There are no artists that matched your search...\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div\r\n  class=\"modal fade\"\r\n  style=\"margin-top: 5%;\"\r\n  id=\"spotifyModal\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"spotifyModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n        <iframe\r\n          [src]=\"url\"\r\n          width=\"100%\"\r\n          height=\"380\"\r\n          frameborder=\"0\"\r\n          allowtransparency=\"true\"\r\n          allow=\"encrypted-media\"\r\n        ></iframe>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div\r\n  class=\"modal fade\"\r\n  style=\"margin-top: 5%;\"\r\n  id=\"editArtistModal\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"editArtistModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">EDIT ARTIST</h5>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label\">NAME</label>\r\n          <div class=\"col-sm-12\">\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              placeholder=\"ENTER NAME\"\r\n              [value]=\"editObject.name\"\r\n              (input)=\"editObject.name = $event.target.value\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label\">TYPE</label>\r\n          <div class=\"col-sm-12\">\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              placeholder=\"ENTER TYPE\"\r\n              [value]=\"editObject.type\"\r\n              (input)=\"editObject.type = $event.target.value\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label\">DESCRIPTION</label>\r\n          <div class=\"col-sm-12\">\r\n            <textarea\r\n              rows=\"5\"\r\n              style=\"width: 100%\"\r\n              [value]=\"editObject.description\"\r\n              (input)=\"editObject.description = $event.target.value\"\r\n            >\r\n            </textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn\" data-dismiss=\"modal\">\r\n          CLOSE\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn\"\r\n          data-dismiss=\"modal\"\r\n          (click)=\"updateArtist()\"\r\n        >\r\n          UPDATE\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/containers/contact-us/contact-us.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/containers/contact-us/contact-us.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h3>\r\n    CONTACT\r\n    <i\r\n      *ngIf=\"showIcons.auth === 'admin'\"\r\n      style=\"cursor: pointer; font-size: 20px;\"\r\n      class=\"fa fa-edit\"\r\n      (click)=\"editField();\"\r\n    ></i>\r\n  </h3>\r\n\r\n  <div *ngIf=\"!isEditable\">\r\n    {{ contactUsData }}\r\n  </div>\r\n  <textarea \r\n    *ngIf=\"isEditable\" \r\n    rows=\"5\" \r\n    style=\"width: 100%\"\r\n    [value]=\"updatedField\"\r\n    (input)=\"updatedField = $event.target.value\">\r\n  </textarea>\r\n  <button *ngIf=\"isEditable\" type=\"button\" class=\"btn pull-right\" (click)=\"updateEdit()\">UPDATE</button>\r\n  <button *ngIf=\"isEditable\" type=\"button\" class=\"btn pull-right\" (click)=\"closeEdit()\">CLOSE</button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/containers/twitter-networking/twitter-networking.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/containers/twitter-networking/twitter-networking.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" [formGroup]=\"userForm\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-3 col-md-6\">\r\n\t\t\t<h3>TWITTER NETWORKING</h3>\r\n\t\t</div>\r\n\t</div>\r\n\t<br>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-2\">\r\n\t\t\t<label>\r\n\t\t\t\tArtist\r\n\t\t\t</label>\r\n\t\t\t<input type=\"text\" id=\"artist\" name=\"artist\" class=\"form-control\" formControlName=\"artist\">\r\n\t\t</div>\r\n\t\t<div class=\"col-md-2\">\r\n\t\t\t<label>\r\n\t\t\t\tSong\r\n\t\t\t</label>\r\n\t\t\t<input type=\"text\" id=\"song\" name=\"song\" class=\"form-control\" formControlName=\"song\">\r\n\t\t</div>\r\n\t\t<div class=\"col-md-2\">\r\n\t\t\t<label>\r\n\t\t\t\tCount\r\n\t\t\t</label>\r\n\t\t\t<input type=\"number\" id=\"search_count\" name=\"search_count\" class=\"form-control\" formControlName=\"search_count\">\r\n\t\t</div>\r\n\t\t<div class=\"col-md-2\">\r\n\t\t\t<label>\r\n\t\t\t\tLikes\r\n\t\t\t</label>\r\n\t\t\t<input type=\"number\" id=\"min_likes\" name=\"min_likes\" class=\"form-control\" formControlName=\"min_likes\">\r\n\t\t</div>\r\n\t\t<div class=\"col-md-2\">\r\n\t\t\t<label>\r\n\t\t\t\tRetweets\r\n\t\t\t</label>\r\n\t\t\t<input type=\"number\" id=\"min_retweets\" name=\"min_retweets\" class=\"form-control\" formControlName=\"min_retweets\">\r\n\t\t</div>\r\n\t\t<div class=\"col-md-2\">\r\n\t\t\t<label>\r\n\t\t\t\tFollowers\r\n\t\t\t</label>\r\n\t\t\t<input type=\"number\" id=\"min_followers\" name=\"min_followers\" class=\"form-control\" formControlName=\"min_followers\">\r\n\t\t</div>\r\n\t</div>\r\n\t<br>\r\n\t<div class=\"row pull-right\">\r\n\t\t<button type=\"button\" class=\"btn\" (click)=\"clearAll()\" [disabled]=\"!submitButtonEnabled\">CLEAR</button>\r\n\t\t<button type=\"button\" class=\"btn\" (click)=\"submit(false)\" [disabled]=\"!submitButtonEnabled || !isFormValid\">SUBMIT</button>\r\n\t</div>\r\n</div>\r\n<div class=\"container\" *ngIf=\"!submitButtonEnabled\">\r\n\t<span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\r\n\tSearching Page {{ pageCount }} for more tweets about {{ userForm.get('song').value }} by {{ userForm.get('artist').value }}... \r\n</div>\r\n<div class=\"container hr-container\" *ngIf=\"resultJSON.length !== 0 || errorReason !== ''\">\r\n\t<p>\r\n\t\t<em>\r\n\t\t\t{{ resultJSON.length }} SEARCH RESULTS \r\n\t\t</em>\r\n\t\t<em *ngIf=\"errorReason !== ''\">\r\n\t\t\t({{ errorReason | uppercase }})\r\n\t\t</em>\r\n\t</p>\r\n\t<hr>\r\n</div>\r\n<div class=\"container result-container\" *ngIf=\"resultJSON.length !== 0\">\r\n\t<div class=\"row results\" *ngFor=\"let tweet of resultJSON; let i = index\">\r\n\t\t<div class=\"col-md-12\">\r\n\t\t\t<p>\r\n\t\t\t\t<strong>\r\n\t\t\t\t\t{{ i + 1 }}. {{ tweet.name }}\r\n\t\t\t\t</strong>\r\n\t\t\t\t<em>\r\n\t\t\t\t\t{{ tweet.username }} ({{ tweet.followers }} Followers)\r\n\t\t\t\t</em>\r\n\t\t\t</p>\r\n\t\t\t<p>\r\n\t\t\t\t{{ tweet.tweet }}\r\n\t\t\t</p>\r\n\t\t\t<p>\r\n\t\t\t\t<em>\r\n\t\t\t\t\t{{ tweet.retweets }} Retweets | {{ tweet.likes }} Likes\r\n\t\t\t\t</em>\r\n\t\t\t</p>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div class=\"container hr-container\" *ngIf=\"resultJSON.length !== 0\">\r\n\t<hr>\r\n</div>\r\n<div class=\"container dm-section\" *ngIf=\"resultJSON.length !== 0\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-10\">\r\n\t\t\t<textarea rows=\"2\" style=\"width: 100%\" id=\"inital_message\" name=\"inital_message\" formControlName=\"inital_message\">\r\n\t\t\t</textarea>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-2\">\r\n\t\t\t<button type=\"button\" class=\"btn pull-right\" (click)=\"sendMessage()\">SEND MESSAGE</button>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/containers/videos/videos.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/containers/videos/videos.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-3 col-md-6\"><h3>VIDEOS</h3></div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"true\">\r\n    <br>\r\n    <div class=\"container\">\r\n      <div class=\"horiz-scroll\">\r\n        <div\r\n          class=\"card\"\r\n          style=\"height: auto; width: auto;\"\r\n          *ngFor=\"let url of urls; index as i\"\r\n        >\r\n        <iframe style=\"background-color: #ededed\" height=\"250\" width=\"450\" [src]=\"url\"></iframe>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var _services_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/firebase/firebase.service */ "./src/app/services/firebase/firebase.service.ts");



let AppComponent = class AppComponent {
    constructor(firebaseService) {
        this.firebaseService = firebaseService;
        this.validLogin = false;
        this.errorsEnabled = false;
        this.closeEnabled = false;
        this.userAuth = {
            username: "",
            password: ""
        };
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
    authorizeAdmin(setting) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.enableErrors();
            if ((yield this.firebaseService.authenticate(this.userAuth)) !== -1) {
                this.showIcons = yield this.firebaseService.authenticate(this.userAuth);
                sessionStorage.setItem("username333", this.userAuth.username);
                sessionStorage.setItem("password333", this.userAuth.password);
                this.validLogin = true;
                this.closeEnabled = true;
                this.clearLogin();
                this.disableErrors();
                if (setting) {
                    $("#adminModal").modal("toggle");
                }
            }
            else {
                sessionStorage.clear();
                this.validLogin = false;
                this.closeEnabled = false;
                this.clearLogin();
            }
        });
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
};
AppComponent.ctorParameters = () => [
    { type: _services_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _containers_artists_artists_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers/artists/artists.component */ "./src/app/containers/artists/artists.component.ts");
/* harmony import */ var _containers_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers/contact-us/contact-us.component */ "./src/app/containers/contact-us/contact-us.component.ts");
/* harmony import */ var _containers_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./containers/about-us/about-us.component */ "./src/app/containers/about-us/about-us.component.ts");
/* harmony import */ var _containers_videos_videos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./containers/videos/videos.component */ "./src/app/containers/videos/videos.component.ts");
/* harmony import */ var _containers_twitter_networking_twitter_networking_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./containers/twitter-networking/twitter-networking.component */ "./src/app/containers/twitter-networking/twitter-networking.component.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _containers_artists_artists_component__WEBPACK_IMPORTED_MODULE_7__["ArtistsComponent"],
            _containers_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_8__["ContactUsComponent"],
            _containers_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__["AboutUsComponent"],
            _containers_videos_videos_component__WEBPACK_IMPORTED_MODULE_10__["VideosComponent"],
            _containers_twitter_networking_twitter_networking_component__WEBPACK_IMPORTED_MODULE_11__["TwitterNetworkingComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



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
/* harmony import */ var _services_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firebase/firebase.service */ "./src/app/services/firebase/firebase.service.ts");



let AboutUsComponent = class AboutUsComponent {
    constructor(firebaseService) {
        this.firebaseService = firebaseService;
        this.isEditable = false;
        this.updatedField = "";
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.aboutUsData = yield this.firebaseService.genericGetter('about_us');
            this.updatedField = this.aboutUsData;
        });
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
};
AboutUsComponent.ctorParameters = () => [
    { type: _services_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AboutUsComponent.prototype, "showIcons", void 0);
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

module.exports = ".horiz-scroll {\r\n  overflow-x: scroll;\r\n  overflow-y: hidden;\r\n  white-space: nowrap;\r\n  -webkit-overflow-scrolling: touch;\r\n}\r\n\r\n.card {\r\n  white-space: pre-line;\r\n  display: inline-block;\r\n  width: 18rem;\r\n  height: 25rem;\r\n  margin-right: 1rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVycy9hcnRpc3RzL2FydGlzdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29udGFpbmVycy9hcnRpc3RzL2FydGlzdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob3Jpei1zY3JvbGwge1xyXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxOHJlbTtcclxuICBoZWlnaHQ6IDI1cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _services_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/firebase/firebase.service */ "./src/app/services/firebase/firebase.service.ts");




let ArtistsComponent = class ArtistsComponent {
    constructor(sanitizer, firebaseService) {
        this.sanitizer = sanitizer;
        this.firebaseService = firebaseService;
        this.editObject = {
            id: undefined,
            name: undefined,
            type: undefined,
            description: undefined
        };
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl("https://open.spotify.com/embed/artist/2nnK1MYUbTKOKXhJbIXpiW");
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.firebaseArtists = yield this.firebaseService.getArtistsRealtime();
            this.searchResults = this.firebaseArtists;
            if ($(window).width() < 768) {
                this.flipButton = false;
                this.showBar = false;
            }
            else {
                this.showBar = true;
            }
        });
    }
    openSpotifyModal(uri) {
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl("https://open.spotify.com/embed/artist/" + uri);
    }
    updateSearch() {
        if ($("#searchBar").val() && $("#searchBar").val() !== "") {
            this.searchResults = this.firebaseArtists.filter(artist => artist.name.toLowerCase().indexOf($("#searchBar")
                .val()
                .toLowerCase()) > -1);
            this.flipButton = true;
        }
        else {
            this.searchResults = this.firebaseArtists;
            if ($(window).width() < 768 && this.flipButton) {
                this.flipButton = false;
            }
            else if ($(window).width() < 768) {
                this.flipButton = true;
            }
            else {
                this.flipButton = false;
            }
        }
    }
    showSearchBar() {
        if ($("#searchBar").val() &&
            $("#searchBar").val() !== "" &&
            $(window).width() < 768) {
            // does nothing...yet...
        }
        else if ($(window).width() < 768) {
            this.showBar = !this.showBar;
            if (!this.showBar) {
                this.searchResults = this.firebaseArtists;
            }
        }
    }
    toggleIcon() {
        if ($("#searchBar").val() &&
            $("#searchBar").val() !== "" &&
            $(window).width() < 768) {
            this.flipButton = !this.flipButton;
        }
        if (this.flipButton) {
            this.flipButton = !this.flipButton;
        }
        if (!this.flipButton) {
            $("#searchBar").val("");
            this.searchResults = this.firebaseArtists;
        }
    }
    editArtist(id, artist) {
        this.editObject.id = id,
            this.editObject.name = artist.name;
        this.editObject.type = artist.type;
        this.editObject.description = artist.description;
    }
    updateArtist() {
        this.firebaseService.updateArtist(this.editObject);
        this.ngOnInit();
    }
};
ArtistsComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
    { type: _services_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ArtistsComponent.prototype, "showIcons", void 0);
ArtistsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "artists",
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
/* harmony import */ var _services_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firebase/firebase.service */ "./src/app/services/firebase/firebase.service.ts");



let ContactUsComponent = class ContactUsComponent {
    constructor(firebaseService) {
        this.firebaseService = firebaseService;
        this.isEditable = false;
        this.updatedField = "";
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.contactUsData = yield this.firebaseService.genericGetter('contact_us');
            this.updatedField = this.contactUsData;
        });
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
};
ContactUsComponent.ctorParameters = () => [
    { type: _services_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContactUsComponent.prototype, "showIcons", void 0);
ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'contact-us',
        template: __webpack_require__(/*! raw-loader!./contact-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/containers/contact-us/contact-us.component.html"),
        styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/containers/contact-us/contact-us.component.css")]
    })
], ContactUsComponent);



/***/ }),

/***/ "./src/app/containers/twitter-networking/twitter-networking.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/containers/twitter-networking/twitter-networking.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    padding-bottom: 50px;\r\n}\r\n\r\n.result-container {   \r\n    overflow-y:auto;\r\n    height: 175px;\r\n}\r\n\r\np {\r\n    margin-top: 0;\r\n    margin-bottom: 0rem;\r\n}\r\n\r\n.results {\r\n    margin-bottom: 2em !important;\r\n}\r\n\r\n.dm-section {\r\n    padding-bottom: 30px !important;\r\n}\r\n\r\n.hr-container {\r\n    padding-bottom: 0px !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVycy90d2l0dGVyLW5ldHdvcmtpbmcvdHdpdHRlci1uZXR3b3JraW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXJzL3R3aXR0ZXItbmV0d29ya2luZy90d2l0dGVyLW5ldHdvcmtpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5yZXN1bHQtY29udGFpbmVyIHsgICBcclxuICAgIG92ZXJmbG93LXk6YXV0bztcclxuICAgIGhlaWdodDogMTc1cHg7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDByZW07XHJcbn1cclxuXHJcbi5yZXN1bHRzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZG0tc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaHItY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/containers/twitter-networking/twitter-networking.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/containers/twitter-networking/twitter-networking.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TwitterNetworkingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterNetworkingComponent", function() { return TwitterNetworkingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_twitter_twitter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/twitter/twitter.service */ "./src/app/services/twitter/twitter.service.ts");
/* harmony import */ var _services_spotify_spotify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/spotify/spotify.service */ "./src/app/services/spotify/spotify.service.ts");





let TwitterNetworkingComponent = class TwitterNetworkingComponent {
    constructor(formBuilder, twitterService, spotifyService) {
        this.formBuilder = formBuilder;
        this.twitterService = twitterService;
        this.spotifyService = spotifyService;
        this.resultJSON = [];
        this.submitButtonEnabled = true;
        this.pageCount = 0;
        this.errorReason = '';
    }
    ngOnInit() {
        this.userForm = this.formBuilder.group({
            artist: ['blackbear', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            song: ['hot girl bummer', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            search_count: ['100', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            min_likes: ['30', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            min_retweets: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            min_followers: ['1000', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            inital_message: ['']
        });
    }
    submit(related, max_id) {
        this.submitButtonEnabled = false;
        this.userForm.disable();
        if (!max_id && !related) {
            this.resultJSON = [];
            this.pageCount = 0;
            this.errorReason = '';
        }
        else if (!max_id && related) {
            this.pageCount = 0;
            this.errorReason = '';
        }
        this.pageCount++;
        this.twitterService.getUsers({
            artist: this.userForm.get('artist').value,
            song: this.userForm.get('song').value,
            search_count: this.userForm.get('search_count').value - this.resultJSON.length,
            min_retweets: this.userForm.get('min_retweets').value,
            min_likes: this.userForm.get('min_likes').value,
            min_followers: this.userForm.get('min_followers').value,
            max_id: max_id
        }).subscribe(res => {
            if (res.max_id != -1) {
                res.data.forEach(element => {
                    this.resultJSON.push(element);
                });
                if (this.resultJSON.length < this.userForm.get('search_count').value) {
                    this.submit(false, res.max_id);
                }
                else {
                    this.submitButtonEnabled = true;
                    this.userForm.enable();
                }
            }
            else {
                if (res.data.length !== 0) {
                    this.submitButtonEnabled = true;
                    this.userForm.enable();
                    this.errorReason = res.data[0].message;
                }
                else {
                    this.errorReason = res.error;
                    this.addRelatedArtist();
                }
            }
        });
    }
    addRelatedArtist() {
        this.spotifyService.getArtistId({
            artist: this.userForm.get('artist').value,
            song: this.userForm.get('song').value,
        }).subscribe(res => {
            if (res) {
                this.userForm.get('artist').setValue(res.artist);
                this.userForm.get('song').setValue(res.song);
                this.submit(true);
            }
            else {
                alert('sad');
            }
        });
    }
    sendMessage() {
        this.twitterService.sendMessage({}).subscribe(res => {
            console.log(res);
        });
        ;
    }
    clearAll() {
        this.userForm.reset();
        this.resultJSON = [];
    }
    get isFormValid() {
        return this.userForm.valid;
    }
};
TwitterNetworkingComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_twitter_twitter_service__WEBPACK_IMPORTED_MODULE_3__["TwitterService"] },
    { type: _services_spotify_spotify_service__WEBPACK_IMPORTED_MODULE_4__["SpotifyService"] }
];
TwitterNetworkingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'twitter-networking',
        template: __webpack_require__(/*! raw-loader!./twitter-networking.component.html */ "./node_modules/raw-loader/index.js!./src/app/containers/twitter-networking/twitter-networking.component.html"),
        styles: [__webpack_require__(/*! ./twitter-networking.component.css */ "./src/app/containers/twitter-networking/twitter-networking.component.css")]
    })
], TwitterNetworkingComponent);



/***/ }),

/***/ "./src/app/containers/videos/videos.component.css":
/*!********************************************************!*\
  !*** ./src/app/containers/videos/videos.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".horiz-scroll {\r\n  overflow-x: scroll;\r\n  overflow-y: hidden;\r\n  white-space: nowrap;\r\n  -webkit-overflow-scrolling: touch;\r\n}\r\n\r\n.card {\r\n  white-space: pre-line;\r\n  display: inline-block;\r\n  width: 18rem;\r\n  height: 25rem;\r\n  margin-right: 1rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVycy92aWRlb3MvdmlkZW9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvdmlkZW9zL3ZpZGVvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvcml6LXNjcm9sbCB7XHJcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDE4cmVtO1xyXG4gIGhlaWdodDogMjVyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/containers/videos/videos.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/containers/videos/videos.component.ts ***!
  \*******************************************************/
/*! exports provided: VideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosComponent", function() { return VideosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _services_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/firebase/firebase.service */ "./src/app/services/firebase/firebase.service.ts");




let VideosComponent = class VideosComponent {
    constructor(sanitizer, firebaseService) {
        this.sanitizer = sanitizer;
        this.firebaseService = firebaseService;
        this.urls = [];
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.videos = yield this.firebaseService.getVideos();
            this.videos.forEach(video => {
                this.urls.push(this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + video));
            });
        });
    }
};
VideosComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
    { type: _services_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], VideosComponent.prototype, "showIcons", void 0);
VideosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'videos',
        template: __webpack_require__(/*! raw-loader!./videos.component.html */ "./node_modules/raw-loader/index.js!./src/app/containers/videos/videos.component.html"),
        styles: [__webpack_require__(/*! ./videos.component.css */ "./src/app/containers/videos/videos.component.css")]
    })
], VideosComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");




let FirebaseService = class FirebaseService {
    constructor() {
        var firebaseConfig = {
            apiKey: "AIzaSyBm8EcIVsLZCMAFdBRyMaMX6ICjI5-t9gc",
            authDomain: "official333am-web.firebaseapp.com",
            databaseURL: "https://official333am-web.firebaseio.com",
            projectId: "official333am-web",
            storageBucket: "",
            messagingSenderId: "539727915084",
            appId: "1:539727915084:web:7494c564765a0965"
        };
        this.realtime = firebase_app__WEBPACK_IMPORTED_MODULE_2__["initializeApp"](firebaseConfig).database();
    }
    authenticate(userAuth) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var array = yield this.getArtistsRealtime();
            for (var i = 0; i < array.length; i++) {
                if (userAuth.username === array[i].username && userAuth.password === array[i].password) {
                    return {
                        username: array[i].username,
                        auth: array[i].auth
                    };
                }
            }
            return -1;
        });
    }
    updateArtist(userInfo) {
        return new Promise(function (resolve) {
            this.realtime.ref("artists/" + userInfo.id).update({
                name: userInfo.name,
                type: userInfo.type,
                description: userInfo.description
            });
            resolve(true);
        }.bind(this));
    }
    getArtistsRealtime() {
        return new Promise(function (resolve) {
            this.realtime.ref("artists/").once("value", function (snapshot) {
                var array = [];
                snapshot.forEach(function (_child) {
                    array.push(_child.val());
                });
                resolve(array);
            });
        }.bind(this));
    }
    getVideos() {
        return new Promise(function (resolve) {
            this.realtime.ref("videos/").once("value", function (snapshot) {
                var array = [];
                snapshot.forEach(function (_child) {
                    array.push(_child.val());
                });
                resolve(array);
            });
        }.bind(this));
    }
    genericSetter(key, update) {
        return new Promise(function (resolve) {
            this.realtime.ref(key + "/").update({
                value: update
            });
            resolve(true);
        }.bind(this));
    }
    genericGetter(key) {
        return new Promise(function (resolve) {
            this.realtime.ref(key + "/").once("value", function (snapshot) {
                resolve(snapshot.val().value);
            });
        }.bind(this));
    }
};
FirebaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], FirebaseService);



/***/ }),

/***/ "./src/app/services/spotify/spotify.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/spotify/spotify.service.ts ***!
  \*****************************************************/
/*! exports provided: SpotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotifyService", function() { return SpotifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let SpotifyService = class SpotifyService {
    constructor(http) {
        this.http = http;
        this.serverHost = 'https://official333am-server.firebaseapp.com';
        if (window.location.href.indexOf('localhost') !== -1) {
            this.serverHost = 'http://localhost:5000';
        }
    }
    getArtistId(json) {
        return this.http.post(this.serverHost + '/api/spotify/artist_id', json);
    }
};
SpotifyService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SpotifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SpotifyService);



/***/ }),

/***/ "./src/app/services/twitter/twitter.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/twitter/twitter.service.ts ***!
  \*****************************************************/
/*! exports provided: TwitterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterService", function() { return TwitterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let TwitterService = class TwitterService {
    constructor(http) {
        this.http = http;
        this.serverHost = 'https://official333am-server.firebaseapp.com';
        if (window.location.href.indexOf('localhost') !== -1) {
            this.serverHost = 'http://localhost:5000';
        }
    }
    getUsers(json) {
        return this.http.post(this.serverHost + '/api/twitter/search', json);
    }
    sendMessage(json) {
        var json2 = {
            userid: 3758444059,
            message: 'i like bear too!'
        };
        return this.http.post(this.serverHost + '/api/twitter/direct_message', json2);
    }
};
TwitterService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TwitterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TwitterService);



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