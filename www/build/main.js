webpackJsonp([0],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeedbackPage = /** @class */ (function () {
    function FeedbackPage(navCtrl, EMAIL, _ALERT, _FORM) {
        this.navCtrl = navCtrl;
        this.EMAIL = EMAIL;
        this._ALERT = _ALERT;
        this._FORM = _FORM;
        this.form = this._FORM.group({
            "strName": ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            "strContactNo": ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            "strEmail": ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            "strContent": ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]
        });
    }
    FeedbackPage.prototype.displayMessage = function (title, subTitle) {
        var alert = this._ALERT.create({
            title: title,
            subTitle: subTitle,
            buttons: ['Got it']
        });
        alert.present();
    };
    FeedbackPage.prototype.sendEmail = function (to, strName, strContactNo, strEmail, strContent) {
        var _this = this;
        this.EMAIL.isAvailable()
            .then(function (available) {
            _this.EMAIL.hasPermission()
                .then(function (isPermitted) {
                var email = {
                    app: 'mailto',
                    to: "mayaung@outlook.com",
                    subject: "Carpark Finder Feedback",
                    body: strContent
                };
                _this.EMAIL.open(email);
            })
                .catch(function (error) {
                console.log('No access permission granted');
                console.dir(error);
            });
        })
            .catch(function (error) {
            console.log('User does not appear to have device e-mail account');
            console.dir(error);
        });
    };
    FeedbackPage.prototype.sendMessage = function () {
        // Retrieve the validated form fields
        var to = "mayaung@outlook.com", Name = this.form.controls["strName"].value, ContactNo = this.form.controls["strContactNo"].value, Email = this.form.controls["strEmail"].value, subject = "Carpark Finder Feedback", message = this.form.controls["strContent"].value;
        this.sendEmail(to, Name, Email, subject, message);
    };
    FeedbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-feedback',template:/*ion-inline-start:"/Users/mac/CarparkFinder/src/pages/feedback/feedback.html"*/'<!--Navigation Bar-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Feedback</ion-title>\n  </ion-navbar>\n</ion-header>\n<!--Home Body-->\n<ion-content padding class="backgroundColor">\n  <br/>\n  <form\n  [formGroup]="form"\n  (ngSubmit)="sendMessage()">\n  <ion-list>\n      <ion-item>\n          <ion-label stacked>Name</ion-label>\n          <ion-input type="string"\n          formControlName="strName"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label stacked>Contact No</ion-label>\n            <ion-input type="string"\n            formControlName="strContactNo"></ion-input>\n          </ion-item>\n      <ion-item>\n        <ion-label stacked>Email</ion-label>\n        <ion-input type="string"\n        formControlName="strEmail"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Content</ion-label>\n        <ion-textarea type="string"\n        formControlName="strContent"></ion-textarea>\n      </ion-item>\n    </ion-list>\n    <br/>\n    <button ion-button full class="buttonColor"ion-button\n    color="primary"\n    text-center\n    block [disabled]="!form.valid">Submit</button>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/CarparkFinder/src/pages/feedback/feedback.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]])
    ], FeedbackPage);
    return FeedbackPage;
}());

//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__searchresult_searchresult__ = __webpack_require__(369);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { SelectSearchableComponent } from 'ionic-select-searchable';



/// <reference types="@types/googlemaps" />


var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, mapsAPILoader, ngZone, _HTTP) {
        this.navCtrl = navCtrl;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this._HTTP = _HTTP;
        this.zoom = 10;
        this.latitude = 1.291667; //39.8282;
        this.longitude = 103.85; //-98.5795;
        //create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]();
        //set current position
        this.setCurrentPosition();
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        //set google maps defaults
        /*this.zoom = 10;
        this.latitude = 1.291667;//39.8282;
        this.longitude = 103.85;//-98.5795;
    
        //create search FormControl
        this.searchControl = new FormControl();
    
        //set current position
        this.setCurrentPosition();*/
        var _this = this;
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var nativeHomeInputBox = document.getElementById('SerchAddr').getElementsByTagName('input')[0];
            var autocomplete = new google.maps.places.Autocomplete(nativeHomeInputBox, {
                componentRestrictions: { country: "sg" }
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.zoom = 12;
                });
            });
        });
    };
    //Google Map API
    SearchPage.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 12;
            });
        }
    };
    SearchPage.prototype.RedirectToSearchResultPage = function () {
        //alert(this.longitude + " " + this.latitude);
        //this.navCtrl.setRoot(SearchResultPage);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__searchresult_searchresult__["a" /* SearchResultPage */], {
            longitude: this.longitude,
            latitude: this.latitude
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
        __metadata("design:type", Object)
    ], SearchPage.prototype, "searchElementRef", void 0);
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/mac/CarparkFinder/src/pages/search/search.html"*/'<!--Navigation Bar-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Search Location</ion-title>\n  </ion-navbar>\n</ion-header>\n<!--Home Body-->\n<ion-content padding class="backgroundColor">\n  <ion-item>\n    <ion-input id="SerchAddr" type="text" placeholder="Enter Address"></ion-input>\n    <button ion-button round item-right (click)="RedirectToSearchResultPage()">GO &nbsp;<ion-icon name="arrow-forward"></ion-icon>\n    </button>\n</ion-item>    \n\n<br/>\n<agm-map [latitude]="latitude" [longitude]="longitude" [scrollwheel]="false" [zoom]="zoom" name="latitude">\n<agm-marker [latitude]="latitude" [longitude]="longitude"></agm-marker>\n</agm-map>\n<br>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/CarparkFinder/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 177;

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 221;

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feedback_feedback__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.RedirectToFeedBackPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__feedback_feedback__["a" /* FeedbackPage */]);
    };
    HomePage.prototype.RedirectToSearchPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/mac/CarparkFinder/src/pages/home/home.html"*/'\n<!--Navigation Bar-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>x\n<!--Home Body-->\n<ion-content padding class="backgroundColor">\n  <br/>\n  <div class="row text-center" (click)="RedirectToSearchPage()">\n    <div class="col">\n    <div class="counter">\n      <ion-icon name="search" class="fa-2x"></ion-icon>\n<h2 class="timer count-title count-number" data-to="100" data-speed="1500"></h2>\n <p class="count-text ">Search Location</p>\n</div>\n</div>\n</div>\n<!--<div class="row text-center">\n  <div class="col">\n  <div class="counter">\n<ion-icon name="locate" class="fa-2x"></ion-icon>\n<h2 class="timer count-title count-number" data-to="100" data-speed="1500"></h2>\n<p class="count-text">Near By You</p>\n</div>\n</div>\n</div>-->\n<div class="row text-center" (click)="RedirectToFeedBackPage()">\n  <div class="col">\n  <div class="counter">\n<i class="fa fa-code fa-2x"></i>\n<ion-icon name="mail"class="fa-2x"></ion-icon>\n<h2 class="timer count-title count-number" data-to="100" data-speed="1500"></h2>\n<p class="count-text ">Feedback Us</p>\n</div>\n</div>\n</div>\n<br/>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/CarparkFinder/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resultdetails_resultdetails__ = __webpack_require__(370);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { SelectSearchableComponent } from 'ionic-select-searchable';


/// <reference types="@types/googlemaps" />


var SearchResultPage = /** @class */ (function () {
    function SearchResultPage(navCtrl, mapsAPILoader, navParams, ngZone, _HTTP, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.mapsAPILoader = mapsAPILoader;
        this.navParams = navParams;
        this.ngZone = ngZone;
        this._HTTP = _HTTP;
        this.modalCtrl = modalCtrl;
        this.selected = [];
        this.rows = [];
        this.columns = [
            { name: 'Location', prop: 'area', width: 100 },
            { name: 'Address', prop: 'development', width: 100 },
            { name: 'Lot Count', prop: 'availableLots', width: 'auto' }
        ];
        this.longitude = navParams.get('longitude');
        this.latitude = navParams.get('latitude');
        this.fetch(function (data) {
            console.log(data);
            _this.selected = [data];
            _this.rows = data;
        });
    }
    SearchResultPage.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', 'http://localhost:3000/get-carpark/' + this.longitude + '/' + this.latitude);
        req.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    SearchResultPage.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        var obj = { carpark: this.selected };
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__resultdetails_resultdetails__["a" /* SearchResultDetailsModal */], obj);
        myModal.present();
        //console.log('Select Event', selected, this.selected);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
        __metadata("design:type", Object)
    ], SearchResultPage.prototype, "searchElementRef", void 0);
    SearchResultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-searchresult',template:/*ion-inline-start:"/Users/mac/CarparkFinder/src/pages/searchresult/searchresult.html"*/'<!--Navigation Bar-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Search Result</ion-title>\n  </ion-navbar>\n</ion-header>\n<!--Home Body-->\n<ion-content padding class="backgroundColor">\n<ngx-datatable click=\'popUpModal()\'\n[sortType]="\'multi\'"\n[headerHeight]="50"\n[footerHeight]="50"\n[rowHeight]="50"\n[rows]="rows"\n[columns]="columns"\n[columnMode]="\'force\'"\n[reorderable]="reorderable"\n[limit]="10"\n[selected]="selected"\n[selectionType]="\'single\'"\n(select)=\'onSelect($event)\'>\n</ngx-datatable>\n\n<!--<div class=\'selected-column\'>\n  (activate)="onActivate($event)"\n  <h4>Selections</h4>\n  <ul>\n    <li *ngFor=\'let sel of selected\'>\n      {{sel.carpark}}\n    </li>\n    <li *ngIf="!selected.length">No Selections</li>\n  </ul>\n</div>\n</ion-content>-->\n'/*ion-inline-end:"/Users/mac/CarparkFinder/src/pages/searchresult/searchresult.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], SearchResultPage);
    return SearchResultPage;
}());

//# sourceMappingURL=searchresult.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultDetailsModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_launch_navigator__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(372);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchResultDetailsModal = /** @class */ (function () {
    function SearchResultDetailsModal(navParams, navCtrl, modalCtrl, viewCtrl, launchNavigator, platform, geolocation) {
        var _this = this;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.launchNavigator = launchNavigator;
        this.platform = platform;
        this.geolocation = geolocation;
        this.carpark = this.navParams.get('carpark');
        this.result = {};
        this.locations = [];
        console.log('Select Event', this.carpark);
        this.platform.ready().then(function () {
            _this.geolocation.getCurrentPosition().then(function (resp) {
                _this.current_latitude = resp.coords.latitude;
                _this.current_longitude = resp.coords.longitude;
            }).catch(function (error) {
                alert(error);
            });
        });
        alert(this.current_longitude + "  " + this.current_latitude);
    }
    SearchResultDetailsModal.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    SearchResultDetailsModal.prototype.LaunchNavigation = function () {
        console.log(this.carpark);
        /*
        this.platform.ready().then(()=>{
        this.launchNavigator.navigate([50.279306, -5.163158],{
          start: this.current_longitude + "," + this.current_latitude//"50.342847, -4.749904"
      })
        .then(
          success => alert('Launched navigator'),
          error => alert('Error launching navigator' + error)
        );
      });
      */ 
    };
    SearchResultDetailsModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-resultdetails',template:/*ion-inline-start:"/Users/mac/CarparkFinder/src/pages/resultdetails/resultdetails.html"*/'  <!--Home Body-->\n  <ion-content padding class="backgroundColor">\n      <h2>Details</h2>\n    <br/>\n    <ion-list>\n        <ion-item>Area:\n            <p *ngFor=\'let s of carpark\'>{{s.area}}</p>\n        </ion-item>\n   </ion-list>\n   <ion-list>\n    <ion-item>Address:\n            <p *ngFor=\'let s of carpark\'>{{s.development}}</p>\n    </ion-item>\n</ion-list>\n<ion-list>\n        <ion-item>Available Lots:\n                <p *ngFor=\'let s of carpark\'>{{s.availableLots}}</p>\n        </ion-item>\n    </ion-list> \n    <ion-list>\n            <ion-item>Agency:\n                    <p *ngFor=\'let s of carpark\'>{{s.agency}}</p>\n            </ion-item>\n        </ion-list>\n        <ion-list>\n                <ion-item>Lot Type:\n                        <p *ngFor=\'let s of carpark\'>{{s.lotType}}</p>\n                </ion-item>\n            </ion-list>\n<ion-list>\n    <ion-item>Price:\n            <p *ngFor=\'let s of carpark\'></p>\n    </ion-item>\n</ion-list> \n<br/>\n<button ion-button block color="secondary" (click)="LaunchNavigation()">\n     Navigate</button><br/>\n<button ion-button block (click)="closeModal()">Close</button>\n  </ion-content>\n  '/*ion-inline-end:"/Users/mac/CarparkFinder/src/pages/resultdetails/resultdetails.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_launch_navigator__["a" /* LaunchNavigator */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]])
    ], SearchResultDetailsModal);
    return SearchResultDetailsModal;
}());

//# sourceMappingURL=resultdetails.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(378);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_feedback_feedback__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_search_search__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_searchresult_searchresult__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_resultdetails_resultdetails__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_select_searchable__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ionic_select_searchable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__agm_core__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__swimlane_ngx_datatable__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_email_composer__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_launch_navigator__ = __webpack_require__(371);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { NearByPage } from '../pages/nearby/nearby';











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_searchresult_searchresult__["a" /* SearchResultPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_resultdetails_resultdetails__["a" /* SearchResultDetailsModal */]
                //NearByPage
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_12__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: "AIzaSyCnahpwY4LRTYlzEHnER3B_Y8NR1HzmrVE",
                    libraries: ["places"]
                }),
                __WEBPACK_IMPORTED_MODULE_11_ionic_select_searchable__["SelectSearchableModule"],
                __WEBPACK_IMPORTED_MODULE_13__swimlane_ngx_datatable__["NgxDatatableModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_searchresult_searchresult__["a" /* SearchResultPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_resultdetails_resultdetails__["a" /* SearchResultDetailsModal */]
                //NearByPage
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_email_composer__["a" /* EmailComposer */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] },
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__["a" /* Geolocation */],
            ],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_feedback_feedback__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_search_search__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { NearByPage } from '../pages/nearby/nearby';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Search', component: __WEBPACK_IMPORTED_MODULE_6__pages_search_search__["a" /* SearchPage */] },
            //{ title: 'List', component: ListPage },
            //{ title: 'Near By', component: NearByPage },
            { title: 'Feedback', component: __WEBPACK_IMPORTED_MODULE_5__pages_feedback_feedback__["a" /* FeedbackPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/mac/CarparkFinder/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/mac/CarparkFinder/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[373]);
//# sourceMappingURL=main.js.map