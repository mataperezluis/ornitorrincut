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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");





const routes = [
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: '', redirectTo: '/header', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sal.js */ "./node_modules/sal.js/dist/sal.js");
/* harmony import */ var sal_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sal_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_works_works_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/works/works.component */ "./src/app/components/works/works.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");









class AppComponent {
    constructor() {
        this.title = 'ornitorrincut';
    }
    ngAfterViewInit() {
        sal_js__WEBPACK_IMPORTED_MODULE_1___default()({
        //  once: false,
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], _components_works_works_component__WEBPACK_IMPORTED_MODULE_4__["WorksComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_works_works_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/works/works.component */ "./src/app/components/works/works.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _servicio_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./servicio.service */ "./src/app/servicio.service.ts");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_servicio_service__WEBPACK_IMPORTED_MODULE_14__["ServicioService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"]
        ], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
        _components_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
        _components_works_works_component__WEBPACK_IMPORTED_MODULE_12__["WorksComponent"],
        _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"]], exports: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                    _components_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
                    _components_works_works_component__WEBPACK_IMPORTED_MODULE_12__["WorksComponent"],
                    _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"]
                ],
                exports: [
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"]
                ],
                providers: [_servicio_service__WEBPACK_IMPORTED_MODULE_14__["ServicioService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _servicio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servicio.service */ "./src/app/servicio.service.ts");



const _c0 = ["tituloAbout"];
class AboutComponent {
    constructor(servicioService) {
        this.servicioService = servicioService;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.elementPosition = this.aboutTituloElement.nativeElement.offsetTop;
        this.servicioService.setData(this.elementPosition - 90);
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicio_service__WEBPACK_IMPORTED_MODULE_1__["ServicioService"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], viewQuery: function AboutComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.aboutTituloElement = _t.first);
    } }, decls: 10, vars: 0, consts: [[1, "container", 2, "height", "100vh"], ["data-sal", "zoom-out", "data-sal-delay", "400", "data-sal-duration", "900", "data-sal-easing", "ease-out-quad", 1, "text-center"], ["tituloAbout", ""], ["data-sal", "slide-right", "data-sal-delay", "400", "data-sal-duration", "900", "data-sal-easing", "ease-out-quad", 1, "lead", "text-left"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Quienes somos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Ornitorrin-cut, es un proyecto multidisciplinario, nacido de la reuni\u00F3n de distintas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " naturalezas en equilibrio, destinado a crear piezas y alimentos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " visuales de alta gama S u i g e n e r i s.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%]\n{\npadding-top:  150px;\nheight: 100vh;\npadding-bottom: 150px;\n\n}\n\nh1[_ngcontent-%COMP%]\n{\n\n  padding-bottom: 3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLG1CQUFtQjtBQUNuQixhQUFhO0FBQ2IscUJBQXFCOztBQUVyQjs7QUFFQTs7O0VBR0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lclxue1xucGFkZGluZy10b3A6ICAxNTBweDtcbmhlaWdodDogMTAwdmg7XG5wYWRkaW5nLWJvdHRvbTogMTUwcHg7XG5cbn1cblxuaDFcbntcblxuICBwYWRkaW5nLWJvdHRvbTogM2VtO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return [{ type: _servicio_service__WEBPACK_IMPORTED_MODULE_1__["ServicioService"] }]; }, { aboutTituloElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['tituloAbout']
        }] }); })();


/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 30, vars: 0, consts: [[1, "container", 2, "height", "100hv"], [2, "width", "90%"], [1, "text-center"], [1, "card-group"], [1, "card"], ["width", "5em", "height", "5em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-building", "card-img-top"], ["fill-rule", "evenodd", "d", "M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694L1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"], ["d", "M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"], [1, "card-body"], [1, "card-title", "text-center"], [1, "card-text", "text-center"], ["width", "5em", "height", "5em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-telephone", "card-img-top"], ["fill-rule", "evenodd", "d", "M3.925 1.745a.636.636 0 0 0-.951-.059l-.97.97c-.453.453-.62 1.095-.421 1.658A16.47 16.47 0 0 0 5.49 10.51a16.471 16.471 0 0 0 6.196 3.907c.563.198 1.205.032 1.658-.421l.97-.97a.636.636 0 0 0-.06-.951l-2.162-1.682a.636.636 0 0 0-.544-.115l-2.052.513a1.636 1.636 0 0 1-1.554-.43L5.64 8.058a1.636 1.636 0 0 1-.43-1.554l.513-2.052a.636.636 0 0 0-.115-.544L3.925 1.745zM2.267.98a1.636 1.636 0 0 1 2.448.153l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"], ["width", "5em", "height", "5em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-envelope", "card-img-top"], ["fill-rule", "evenodd", "d", "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Contactenos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Direcci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "San Telmo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Tel\u00E9fono");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "+54 1173646311");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Ornitorrincut@prueba.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".card[_ngcontent-%COMP%]\n{\n  border: none;\n  background-color: transparent !important;\n}\n\n\n.container[_ngcontent-%COMP%]\n{\npadding-top:  150px;\npadding-bottom: 150px;\n\n}\n\n\nh1[_ngcontent-%COMP%]{\npadding-bottom: 3em;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxZQUFZO0VBQ1osd0NBQXdDO0FBQzFDOzs7QUFHQTs7QUFFQSxtQkFBbUI7QUFDbkIscUJBQXFCOztBQUVyQjs7O0FBRUE7QUFDQSxtQkFBbUI7O0FBRW5CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkXG57XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuXG4uY29udGFpbmVyXG57XG5wYWRkaW5nLXRvcDogIDE1MHB4O1xucGFkZGluZy1ib3R0b206IDE1MHB4O1xuXG59XG5cbmgxe1xucGFkZGluZy1ib3R0b206IDNlbTtcblxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 5, vars: 0, consts: [[1, "footer"], [1, "content", "text-center"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ornitorrincut");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#footer-Content[_ngcontent-%COMP%] {\n  padding-top: 130px;\n  background: #180e29; }\n  #footer-Content[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    padding-top: 70px; }\n  #footer-Content[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n    outline: none;\n    box-shadow: none;\n    background: #e5fff3; }\n  #footer-Content[_ngcontent-%COMP%]   .widget[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #e2e2e2;\n    font-size: 16px;\n    line-height: 32px; }\n  #footer-Content[_ngcontent-%COMP%]   .widget[_ngcontent-%COMP%]   .subscribe-area[_ngcontent-%COMP%] {\n    position: relative;\n    height: 40px;\n    margin-top: 18px; }\n  #footer-Content[_ngcontent-%COMP%]   .widget[_ngcontent-%COMP%]   .subscribe-area[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%] {\n      background: #24153c;\n      border: 1px solid #fff;\n      color: #e2e2e2;\n      font-size: 14px;\n      font-style: italic;\n      height: 38px; }\n  #footer-Content[_ngcontent-%COMP%]   .widget[_ngcontent-%COMP%]   .subscribe-area[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n      position: absolute;\n      right: 0;\n      width: 60px;\n      height: 38px;\n      color: #fff;\n      top: 0;\n      background: #3ecf8e;\n      display: block;\n      padding: 9px 20px;\n      font-size: 18px;\n      border-radius: 0px 4px 4px 0px; }\n  #footer-Content[_ngcontent-%COMP%]   h3.block-title[_ngcontent-%COMP%] {\n    color: #fff;\n    font-size: 20px;\n    font-weight: 600;\n    margin-bottom: 30px; }\n  #footer-Content[_ngcontent-%COMP%]   ul.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #e2e2e2;\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 32px;\n    transition: all 300ms; }\n  #footer-Content[_ngcontent-%COMP%]   ul.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n      color: #3ecf8e;\n      padding-left: 5px;\n      transition: all 300ms; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUU7RUFDckI7SUFDRSxpQkFBaUIsRUFBRTtFQUNyQjtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CLEVBQUU7RUFDdkI7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQixFQUFFO0VBQ3JCO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0IsRUFBRTtFQUNsQjtNQUNFLG1CQUFtQjtNQUNuQixzQkFBc0I7TUFDdEIsY0FBYztNQUNkLGVBQWU7TUFDZixrQkFBa0I7TUFDbEIsWUFBWSxFQUFFO0VBQ2hCO01BQ0Usa0JBQWtCO01BQ2xCLFFBQVE7TUFDUixXQUFXO01BQ1gsWUFBWTtNQUNaLFdBQVc7TUFDWCxNQUFNO01BQ04sbUJBQW1CO01BQ25CLGNBQWM7TUFDZCxpQkFBaUI7TUFDakIsZUFBZTtNQUNmLDhCQUE4QixFQUFFO0VBQ3BDO0lBQ0UsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CLEVBQUU7RUFDdkI7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFHakIscUJBQXFCLEVBQUU7RUFDdkI7TUFDRSxjQUFjO01BQ2QsaUJBQWlCO01BR2pCLHFCQUFxQixFQUFFIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZm9vdGVyLUNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogMTMwcHg7XG4gIGJhY2tncm91bmQ6ICMxODBlMjk7IH1cbiAgI2Zvb3Rlci1Db250ZW50IC5mb290ZXItbG9nbyBpbWcge1xuICAgIHBhZGRpbmctdG9wOiA3MHB4OyB9XG4gICNmb290ZXItQ29udGVudCAuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogI2U1ZmZmMzsgfVxuICAjZm9vdGVyLUNvbnRlbnQgLndpZGdldCBwIHtcbiAgICBjb2xvcjogI2UyZTJlMjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7IH1cbiAgI2Zvb3Rlci1Db250ZW50IC53aWRnZXQgLnN1YnNjcmliZS1hcmVhIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi10b3A6IDE4cHg7IH1cbiAgICAjZm9vdGVyLUNvbnRlbnQgLndpZGdldCAuc3Vic2NyaWJlLWFyZWEgaW5wdXRbdHlwZT1lbWFpbF0ge1xuICAgICAgYmFja2dyb3VuZDogIzI0MTUzYztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgICBjb2xvcjogI2UyZTJlMjtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIGhlaWdodDogMzhweDsgfVxuICAgICNmb290ZXItQ29udGVudCAud2lkZ2V0IC5zdWJzY3JpYmUtYXJlYSBzcGFuIGkge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB3aWR0aDogNjBweDtcbiAgICAgIGhlaWdodDogMzhweDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgdG9wOiAwO1xuICAgICAgYmFja2dyb3VuZDogIzNlY2Y4ZTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcGFkZGluZzogOXB4IDIwcHg7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAwcHggNHB4IDRweCAwcHg7IH1cbiAgI2Zvb3Rlci1Db250ZW50IGgzLmJsb2NrLXRpdGxlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4OyB9XG4gICNmb290ZXItQ29udGVudCB1bC5tZW51IGxpIGEge1xuICAgIGNvbG9yOiAjZTJlMmUyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAzMDBtcztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7IH1cbiAgICAjZm9vdGVyLUNvbnRlbnQgdWwubWVudSBsaSBhOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjM2VjZjhlO1xuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzMDBtcztcbiAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAzMDBtcztcbiAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtczsgfVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! p5 */ "./node_modules/p5/lib/p5.min.js");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _particles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./particles */ "./src/app/components/header/particles.ts");
/* harmony import */ var jump_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jump.js */ "./node_modules/jump.js/dist/jump.module.js");
/* harmony import */ var _servicio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../servicio.service */ "./src/app/servicio.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");











class HeaderComponent {
    constructor(servicioService) {
        this.servicioService = servicioService;
        this.isMenuOpen = false;
        this.sticky = false;
        this.sw = 2;
        this.c = [];
        this.strokeColor = 0;
        this.particles = [];
        this.sizeRaton = 0;
        //st = 'Ornitorrin-cut, es un proyecto multidisciplinario, nacido  de la reunión de distintas  naturalezas en equilibrio, destinado a crear piezas y alimentos visuales de alta gama    S u i    g e n e r i s.';
        this.st = "Ornitorrincut:";
        this.st2 = "Confección de universos visuales";
    }
    ngOnInit() {
        ///----------------------------------
        // this sketch was modified from the original
        // https://editor.p5js.org/Janglee123/sketches/HJ2RnrQzN
        const sketch = s => {
            s.preload = () => {
                this.sizeRaton = s.windowWidth / 30;
                this.fuenteMono1 = s.loadFont("assets/fonts/RobotoMono-Regular.ttf");
            };
            s.setup = () => {
                let canvas2 = s.createCanvas(s.windowWidth - 20, s.windowHeight * 4);
                canvas2.parent('sketch-holder');
                canvas2.position(0, 0);
                canvas2.style("z-index : -1");
                s.background(10, 38, 53);
                for (let i = 0; i < s.windowWidth / 40; i++) {
                    this.particles.push(new _particles__WEBPACK_IMPORTED_MODULE_2__["Particle"](s));
                }
            };
            s.draw = () => {
                s.background(10, 38, 53);
                //s.fill('#ED225D');
                s.textStyle(s.ITALIC);
                s.textSize(s.windowWidth / 28);
                s.text(this.st, s.windowWidth / 11, s.windowHeight - s.windowHeight / 2, s.windowWidth, s.windowHeight); // Text wraps within text box
                s.textStyle(s.NORMAL);
                s.textSize(s.windowWidth / 30);
                s.text(this.st2, (s.windowWidth / 9) * 3, s.windowHeight - s.windowHeight / 2, s.windowWidth, s.windowHeight); // Text wraps within text box
                if (s.mouseY > s.windowHeight + 20 && s.mouseY < s.windowHeight * 2 + 20) {
                    s.triangle(s.mouseX - this.sizeRaton / 2, s.mouseY + this.sizeRaton / 2, s.mouseX + this.sizeRaton / 2, s.mouseY + this.sizeRaton / 2, s.mouseX, s.mouseY - this.sizeRaton / 2);
                }
                else {
                    s.ellipse(s.mouseX, s.mouseY, this.sizeRaton, this.sizeRaton);
                }
                for (let j = 0; j < this.particles.length; j++) {
                    this.particles[j].createParticle();
                    this.particles[j].moveParticle();
                    this.particles[j].repulse();
                    this.particles[j].joinParticles(this.particles.slice(j));
                }
            };
        };
        this.canvas = new p5__WEBPACK_IMPORTED_MODULE_1___default.a(sketch);
        ///-----------------------------------
    }
    onSidenavClick() {
        this.isMenuOpen = false;
    }
    onClickScrollRaton() {
        Object(jump_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this.servicioService.getData());
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicio_service__WEBPACK_IMPORTED_MODULE_4__["ServicioService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 28, vars: 7, consts: [[2, "height", "100vh"], [1, "sketch-container"], ["id", "sketch-holder"], ["routerLink", "/"], ["id", "nav-bar", 1, "navbar", "navbar-expand-md", "bg-inverse", "fixed-top", "scrolling-navbar"], ["mat-button", "", 1, "menu-button", 3, "click"], [1, "navbar-brand", "mx-auto"], ["src", "assets/logo.png", "alt", "", "id", "logo"], [1, "sidenav-container"], ["autoFocus", "true", "mode", "over", "fixedInViewport", "true", 1, "sidenav", 3, "opened", "openedChange"], ["sidenav", ""], ["mat-list-item", "", 3, "routerLink"], ["id", "menu-vertical", 1, "menu-vert", 2, "height", "88vh"], ["href", "#portfolio-section", 1, "mouse-wrap", "smoothscroll", 3, "click"], [1, "mouse"], [1, "scroll"], [1, "mouse-label"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-sidenav-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-sidenav", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openedChange", function HeaderComponent_Template_mat_sidenav_openedChange_11_listener($event) { return ctx.isMenuOpen = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Quienes Somos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Trabajos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Contacto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_23_listener() { return ctx.onClickScrollRaton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Scroll");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isMenuOpen ? "menu_open" : "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", ctx.isMenuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-top", 50, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/Trabajos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/Contacto");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListItem"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: ["#logo[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 50%;\n    top:15%;\n    margin-left: -84px !important;  \n    display: block;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.navbar[_ngcontent-%COMP%]{\n  top:-2%;\nbackground-color: transparent !important;\nz-index: 19;\n}\n\n.menu-button[_ngcontent-%COMP%] {\n              margin-right: 24px;\n              min-width: 0;\n              padding: 0;\n              top:24px;\n              line-height: normal;\n          }\n\nhr[_ngcontent-%COMP%] {\n  height: 2px;\n  width: 80%;\n  left: 50%;\n  top:0;\n  background-color: black;\n}\n\n.sidenav-container[_ngcontent-%COMP%] {\n    flex: 1;\n    background-color: transparent !important;\n\n    .sidenav {\n        min-width: 240px;\n        position:relative;\n        display: flex;\n        flex-direction: column;\n        z-index: 20;\n\n        a {\n            display: block;\n            padding: 16px 24px;\n            width: 100%;\n            text-align: center;\n        }\n\n\n\n    }\n    main {\n        padding: 18px 24px;\n    }\n}\n\n.mouse-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 50px;\n  z-index: 9; }\n\n.mouse-wrap[_ngcontent-%COMP%]:active, .mouse-wrap[_ngcontent-%COMP%]:active    > .mouse-label[_ngcontent-%COMP%], .mouse-wrap[_ngcontent-%COMP%]:focus, .mouse-wrap[_ngcontent-%COMP%]:focus    > .mouse-label[_ngcontent-%COMP%] {\n    outline: none; }\n\n.mouse-wrap.mouse-with-slider[_ngcontent-%COMP%] {\n    bottom: -50px; }\n\n.mouse-wrap[_ngcontent-%COMP%]   .mouse-label[_ngcontent-%COMP%] {\n    top: 0;\n    color: #ccc;\n    font-size: 10px;\n    font-weight: 700;\n    letter-spacing: .05rem;\n    text-transform: uppercase; }\n\n.mouse-wrap[_ngcontent-%COMP%]   .mouse[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 22px;\n    height: 42px;\n    bottom: 30px;\n    display: block;\n    left: 50%;\n    margin-left: -12px;\n    border-radius: 15px;\n    border: 2px solid #ccc;\n    animation: intro 2s; }\n\n.mouse-wrap[_ngcontent-%COMP%]   .mouse[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%] {\n      display: block;\n      width: 3px;\n      height: 3px;\n      margin: 6px auto;\n      border-radius: 4px;\n      background: #ccc;\n      animation: finger 2s infinite; }\n\n@keyframes intro {\n  0% {\n    opacity: 0;\n    transform: translateY(40px); }\n  100% {\n    opacity: 1;\n    transform: translateY(0); } }\n\n@keyframes finger {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    transform: translateY(20px); } }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsNkJBQTZCLEdBQUcsMkJBQTJCO0lBQzNELGNBQWM7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxPQUFPO0FBQ1Qsd0NBQXdDO0FBQ3hDLFdBQVc7QUFDWDs7QUFJVTtjQUNJLGtCQUFrQjtjQUNsQixZQUFZO2NBQ1osVUFBVTtjQUNWLFFBQVE7Y0FDUixtQkFBbUI7VUFDdkI7O0FBRVY7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFNBQVM7RUFDVCxLQUFLO0VBQ0wsdUJBQXVCO0FBQ3pCOztBQUdBO0lBQ0ksT0FBTztJQUNQLHdDQUF3Qzs7SUFFeEM7UUFDSSxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsV0FBVzs7UUFFWDtZQUNJLGNBQWM7WUFDZCxrQkFBa0I7WUFDbEIsV0FBVztZQUNYLGtCQUFrQjtRQUN0Qjs7OztJQUlKO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsU0FBUztFQUdULDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osVUFBVSxFQUFFOztBQUNaO0lBQ0UsYUFBYSxFQUFFOztBQUNqQjtJQUNFLGFBQWEsRUFBRTs7QUFDakI7SUFDRSxNQUFNO0lBQ04sV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHlCQUF5QixFQUFFOztBQUM3QjtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixjQUFjO0lBQ2QsU0FBUztJQUNULGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBRXRCLG1CQUFtQixFQUFFOztBQUNyQjtNQUNFLGNBQWM7TUFDZCxVQUFVO01BQ1YsV0FBVztNQUNYLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsZ0JBQWdCO01BRWhCLDZCQUE2QixFQUFFOztBQVlyQztFQUNFO0lBQ0UsVUFBVTtJQUVWLDJCQUEyQixFQUFFO0VBQy9CO0lBQ0UsVUFBVTtJQUVWLHdCQUF3QixFQUFFLEVBQUU7O0FBVWhDO0VBQ0U7SUFDRSxVQUFVLEVBQUU7RUFDZDtJQUNFLFVBQVU7SUFFViwyQkFBMkIsRUFBRSxFQUFFIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiNsb2dvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDoxNSU7XG4gICAgbWFyZ2luLWxlZnQ6IC04NHB4ICFpbXBvcnRhbnQ7ICAvKiA1MCUgb2YgeW91ciBsb2dvIHdpZHRoICovXG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5uYXZiYXItYnJhbmQge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm5hdmJhcntcbiAgdG9wOi0yJTtcbmJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG56LWluZGV4OiAxOTtcbn1cblxuXG5cbiAgICAgICAgICAubWVudS1idXR0b24ge1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgdG9wOjI0cHg7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgfVxuXG5ociB7XG4gIGhlaWdodDogMnB4O1xuICB3aWR0aDogODAlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDowO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuXG4uc2lkZW5hdi1jb250YWluZXIge1xuICAgIGZsZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcblxuICAgIC5zaWRlbmF2IHtcbiAgICAgICAgbWluLXdpZHRoOiAyNDBweDtcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHotaW5kZXg6IDIwO1xuXG4gICAgICAgIGEge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDI0cHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG5cblxuICAgIH1cbiAgICBtYWluIHtcbiAgICAgICAgcGFkZGluZzogMThweCAyNHB4O1xuICAgIH1cbn1cblxuLm1vdXNlLXdyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBib3R0b206IDUwcHg7XG4gIHotaW5kZXg6IDk7IH1cbiAgLm1vdXNlLXdyYXA6YWN0aXZlLCAubW91c2Utd3JhcDphY3RpdmUgPiAubW91c2UtbGFiZWwsIC5tb3VzZS13cmFwOmZvY3VzLCAubW91c2Utd3JhcDpmb2N1cyA+IC5tb3VzZS1sYWJlbCB7XG4gICAgb3V0bGluZTogbm9uZTsgfVxuICAubW91c2Utd3JhcC5tb3VzZS13aXRoLXNsaWRlciB7XG4gICAgYm90dG9tOiAtNTBweDsgfVxuICAubW91c2Utd3JhcCAubW91c2UtbGFiZWwge1xuICAgIHRvcDogMDtcbiAgICBjb2xvcjogI2NjYztcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLjA1cmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cbiAgLm1vdXNlLXdyYXAgLm1vdXNlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDIycHg7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICAgIGJvdHRvbTogMzBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2NjYztcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogaW50cm8gMnM7XG4gICAgYW5pbWF0aW9uOiBpbnRybyAyczsgfVxuICAgIC5tb3VzZS13cmFwIC5tb3VzZSAuc2Nyb2xsIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDNweDtcbiAgICAgIGhlaWdodDogM3B4O1xuICAgICAgbWFyZ2luOiA2cHggYXV0bztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGJhY2tncm91bmQ6ICNjY2M7XG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogZmluZ2VyIDJzIGluZmluaXRlO1xuICAgICAgYW5pbWF0aW9uOiBmaW5nZXIgMnMgaW5maW5pdGU7IH1cblxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGludHJvIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQwcHgpOyB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9IH1cblxuQGtleWZyYW1lcyBpbnRybyB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0MHB4KTsgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSB9XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmaW5nZXIge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTsgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTsgfSB9XG5cbkBrZXlmcmFtZXMgZmluZ2VyIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7IH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7IH0gfVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _servicio_service__WEBPACK_IMPORTED_MODULE_4__["ServicioService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/header/particles.ts":
/*!************************************************!*\
  !*** ./src/app/components/header/particles.ts ***!
  \************************************************/
/*! exports provided: Particle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Particle", function() { return Particle; });
class Particle {
    constructor(p5) {
        this._p5 = p5;
        this.altura = this._p5.windowHeight + this._p5.windowHeight / 8;
        this.x = this._p5.random(0, this._p5.width);
        this.y = this._p5.random(0, this.altura);
        this.r = this._p5.random(4, 8);
        this.xSpeed = this._p5.random(-4, 4);
        this.ySpeed = this._p5.random(-2, 3);
    }
    // creation of a particle.
    createParticle() {
        this._p5.noStroke();
        this._p5.fill('rgba(250,247,247,0.5)');
        this._p5.circle(this.x, this.y, this.r);
    }
    // setting the particle in motion.
    moveParticle() {
        if (this.x < 0 || this.x > this._p5.width)
            this.xSpeed *= -1;
        if (this.y < 0 || this.y > this.altura)
            this.ySpeed *= -1;
        this.x += 2 * this.xSpeed;
        this.y += 2 * this.ySpeed;
    }
    repulse() {
        let dis = this._p5.dist(this.x, this.y, this._p5.mouseX, this._p5.mouseY);
        if (dis < this._p5.windowWidth / 30) {
            if (this.x >= this._p5.mouseX)
                this.xSpeed = -1 * this.xSpeed;
            if (this.y > this._p5.mouseY)
                this.ySpeed = -1 * this.ySpeed;
            this.x += 2 * this.xSpeed;
            this.y += 2 * this.ySpeed;
        }
    }
    // this function creates the connections(lines)
    // between particles which are less than a certain distance apart
    joinParticles(particles) {
        particles.forEach(element => {
            let dis = this._p5.dist(this.x, this.y, element.x, element.y);
            if (dis < 60) {
                this._p5.stroke('rgba(250,247,247,0.5)');
                this._p5.line(this.x, this.y, element.x, element.y);
            }
        });
    }
}


/***/ }),

/***/ "./src/app/components/works/works.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/works/works.component.ts ***!
  \*****************************************************/
/*! exports provided: WorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksComponent", function() { return WorksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class WorksComponent {
    constructor() {
    }
    ngOnInit() {
        ;
    }
}
WorksComponent.ɵfac = function WorksComponent_Factory(t) { return new (t || WorksComponent)(); };
WorksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorksComponent, selectors: [["app-works"]], decls: 9, vars: 0, consts: [["data-sal", "zoom-out", "data-sal-delay", "400", "data-sal-duration", "900", "data-sal-easing", "ease-out-quad", 1, "text-center"], [1, "card", "mb-2"], ["data-sal", "slide-right", "data-sal-delay", "400", "data-sal-duration", "900", "data-sal-easing", "ease-out-quad", "src", "assets/Imagenes_proyectos/index.svg", "alt", "Card image cap", 1, "card-img-top"], [1, "card-body"], [1, "card-title"], [1, "card-text"]], template: function WorksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Trabajos Recientes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".card[_ngcontent-%COMP%]\n{\n  border: none;\n  background-color: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93b3Jrcy93b3Jrcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7RUFFRSxZQUFZO0VBQ1osd0NBQXdDO0FBQzFDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy93b3Jrcy93b3Jrcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY2FyZFxue1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-works',
                templateUrl: './works.component.html',
                styleUrls: ['./works.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/servicio.service.ts":
/*!*************************************!*\
  !*** ./src/app/servicio.service.ts ***!
  \*************************************/
/*! exports provided: ServicioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioService", function() { return ServicioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ServicioService {
    constructor() { }
    getData() {
        return this.elementAboutPosition;
    }
    setData(val) {
        this.elementAboutPosition = val;
    }
}
ServicioService.ɵfac = function ServicioService_Factory(t) { return new (t || ServicioService)(); };
ServicioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ServicioService, factory: ServicioService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/lmata/ornitorrincut/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map