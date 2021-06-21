(self["webpackChunkbolt"] = self["webpackChunkbolt"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _pages_verify_number_verify_number_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/verify-number/verify-number.component */ 2365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [
    { path: '', component: _pages_verify_number_verify_number_component__WEBPACK_IMPORTED_MODULE_0__.VerifyNumberComponent },
    { path: 'enter-code', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_enter-code_enter-code_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/enter-code/enter-code.module */ 7797)).then(m => m.EnterCodeModule) }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);


class AppComponent {
    constructor() {
        this.title = 'bolt';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [["src", "../assets/img/apple-iphone-x-landing-page-blank-png-22.png", "alt", "", 1, "iphone"], [1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: [".container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.iphone[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 0;\n  width: 47rem;\n  height: 92rem;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBRUYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4uaXBob25lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAwO1xuICB3aWR0aDogNDdyZW07XG4gIGhlaWdodDogOTJyZW07XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuIl19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _pages_verify_number_verify_number_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/verify-number/verify-number.module */ 8809);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);





class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
            _pages_verify_number_verify_number_module__WEBPACK_IMPORTED_MODULE_2__.VerifyNumberModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _pages_verify_number_verify_number_module__WEBPACK_IMPORTED_MODULE_2__.VerifyNumberModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] }); })();


/***/ }),

/***/ 2802:
/*!*******************************************************************!*\
  !*** ./src/app/components/image-select/image-select.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageSelectComponent": () => (/* binding */ ImageSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 1321);




function ImageSelectComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageSelectComponent_button_5_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const country_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.selectCountry(country_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", country_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", country_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](country_r1.name);
} }
class ImageSelectComponent {
    constructor() {
        this.isHiddenDropdown = true;
        this.selectedCountry = { code: '', img: '', name: '' };
        this.onChanged = () => { };
        this.onTouched = () => { };
    }
    writeValue(countryCode) {
        if (this.countries) {
            const selectedCountry = this.countries.find(country => country.code === countryCode);
            this.selectedCountry = selectedCountry ? selectedCountry : { name: '', code: '', img: '' };
        }
    }
    registerOnChange(fn) {
        this.onChanged = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    ngOnInit() { }
    openDropdown() {
        this.isHiddenDropdown = false;
    }
    closeDropdown() {
        this.isHiddenDropdown = true;
    }
    selectCountry(country) {
        this.writeValue(country.code);
        this.onChanged(country.code);
        this.closeDropdown();
    }
}
ImageSelectComponent.ɵfac = function ImageSelectComponent_Factory(t) { return new (t || ImageSelectComponent)(); };
ImageSelectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageSelectComponent, selectors: [["app-image-select"]], inputs: { countries: "countries" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => ImageSelectComponent),
                multi: true,
            }
        ])], decls: 6, vars: 5, consts: [[1, "flag-select"], ["data-test", "test-select-button", 1, "flag-select__button", 3, "click"], [1, "flag-select__icon", 3, "src"], ["src", "/assets/img/arrow.png", 3, "alt"], [1, "dropdown"], ["data-test", "test-option-button", 3, "click", 4, "ngFor", "ngForOf"], ["data-test", "test-option-button", 3, "click"], [1, "dropdown__item"], [3, "src", "alt"]], template: function ImageSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageSelectComponent_Template_button_click_1_listener() { return ctx.isHiddenDropdown ? ctx.openDropdown() : ctx.closeDropdown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ImageSelectComponent_button_5_Template, 5, 3, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.selectedCountry.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", ctx.selectedCountry.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dropdown--hidden", ctx.isHiddenDropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countries);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: [".flag-select[_ngcontent-%COMP%] {\n  background-color: #fff;\n  position: relative;\n}\n.flag-select__button[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.flag-select__icon[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  margin-right: 1rem;\n}\n.dropdown[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 4.5rem;\n}\n.dropdown--hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.dropdown[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  background: #fff;\n  border: none;\n  cursor: pointer;\n}\n.dropdown__item[_ngcontent-%COMP%] {\n  width: 15rem;\n  display: flex;\n  align-items: center;\n  border: 0.5px solid grey;\n  border-radius: 1px;\n  padding: 0.5rem;\n}\n.dropdown__item[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLXNlbGVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNFO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDRTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQUY7QUFHRTtFQUNFLGFBQUE7QUFESjtBQUlFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUZKO0FBSUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFGSjtBQUdJO0VBQ0Usb0JBQUE7QUFETiIsImZpbGUiOiJpbWFnZS1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxhZy1zZWxlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJl9fYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gICZfX2ljb24ge1xuICAgIHdpZHRoOiAyLjVyZW07XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICB9XG59XG5cbi5kcm9wZG93biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0LjVyZW07XG4gIC8vIHJpZ2h0OiAtM3JlbTtcblxuICAmLS1oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAmPmJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6cG9pbnRlclxuICB9XG4gICZfX2l0ZW17XG4gICAgd2lkdGg6IDE1cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IC41cHggc29saWQgZ3JleTtcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XG4gICAgcGFkZGluZzogLjVyZW07XG4gICAgJj5pbWd7XG4gICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 9185:
/*!*****************************************************************!*\
  !*** ./src/app/components/phone-input/phone-input.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhoneInputComponent": () => (/* binding */ PhoneInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _image_select_image_select_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../image-select/image-select.component */ 2802);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 1321);






function PhoneInputComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Enter a phone number before continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class PhoneInputComponent {
    constructor(fb) {
        this.fb = fb;
        this.isValid = true;
        this.keyValue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.form = this.fb.group({
            phone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            code: ['+593'],
        });
    }
    ngOnInit() { }
    emmitKeyValue(event) {
        this.keyValue.emit(event);
    }
    printData() {
        console.log('form', this.form.value);
    }
    continue() {
        console.log('valido');
    }
}
PhoneInputComponent.ɵfac = function PhoneInputComponent_Factory(t) { return new (t || PhoneInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
PhoneInputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PhoneInputComponent, selectors: [["app-phone-input"]], inputs: { countries: "countries", isValid: "isValid" }, outputs: { keyValue: "keyValue" }, decls: 14, vars: 8, consts: [[1, "form", 3, "formGroup", "submit"], [1, "form__phone"], ["id", "imageTest", "formControlName", "code", 3, "countries"], ["formControlName", "phone", "type", "text", "placeholder", "Phone number", 1, "form__phone__input", 3, "keypress"], ["class", "form__warning", 4, "ngIf"], [1, "form__login"], ["href", "", 1, "form__login-button"], ["type", "submit", 1, "form__button", 3, "disabled"], [1, "form__warning"]], template: function PhoneInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function PhoneInputComponent_Template_form_submit_2_listener() { return ctx.continue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-image-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function PhoneInputComponent_Template_input_keypress_7_listener($event) { ctx.emmitKeyValue($event); return ctx.isValid; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, PhoneInputComponent_p_8_Template, 2, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Log in with facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "CONTINUE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.isValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("countries", ctx.countries);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.form.value.code);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("invalid", ctx.form.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.form.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _image_select_image_select_component__WEBPACK_IMPORTED_MODULE_0__.ImageSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: [".form__phone[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 2px solid #34d186;\n  border-radius: 5px;\n  padding: 1.5rem;\n}\n.form__phone__input[_ngcontent-%COMP%] {\n  width: 12rem;\n  height: 2.1rem;\n  border: none;\n  font-size: 1.8rem;\n}\n.form__phone__input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.form__phone[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  margin-left: 1.1rem;\n  margin-right: 1.9rem;\n}\n.form__button[_ngcontent-%COMP%] {\n  margin-top: 1.3rem;\n  width: 33.7rem;\n  height: 5.5rem;\n  background: #34d186;\n  border-radius: 10rem;\n  font-weight: 600;\n  font-size: 1.7rem;\n  line-height: 125%;\n  color: #ffffff;\n  border: none;\n}\n.form__login[_ngcontent-%COMP%] {\n  margin-top: 25.9rem;\n  color: #34d186;\n  font-size: 1.5rem;\n}\n.form__login-button[_ngcontent-%COMP%]:link, .form__login-button[_ngcontent-%COMP%]:visited {\n  color: #34d186;\n  text-decoration: none;\n  cursor: pointer;\n}\n.form__warning[_ngcontent-%COMP%] {\n  margin-top: 0.8rem;\n  color: red;\n  font-size: 1.5rem;\n}\n.invalid[_ngcontent-%COMP%] {\n  background: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob25lLWlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFBSjtBQUNJO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDTjtBQUFNO0VBQ0UsYUFBQTtBQUVSO0FBQ0k7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFDTjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUFKO0FBRUU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUFKO0FBQ0k7RUFFRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBQU47QUFHRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBREo7QUFJQTtFQUNFLHFCQUFBO0FBREYiLCJmaWxlIjoicGhvbmUtaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybSB7XG4gICZfX3Bob25lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzM0ZDE4NjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICAgICZfX2lucHV0IHtcbiAgICAgIHdpZHRoOiAxMnJlbTtcbiAgICAgIGhlaWdodDogMi4xcmVtO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gICAgJiA+IHAge1xuICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgICBtYXJnaW4tbGVmdDogMS4xcmVtO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxLjlyZW07XG4gICAgfVxuICB9XG4gICZfX2J1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMS4zcmVtO1xuICAgIHdpZHRoOiAzMy43cmVtO1xuICAgIGhlaWdodDogNS41cmVtO1xuICAgIGJhY2tncm91bmQ6ICMzNGQxODY7XG4gICAgYm9yZGVyLXJhZGl1czogMTByZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICBsaW5lLWhlaWdodDogMTI1JTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgJl9fbG9naW4ge1xuICAgIG1hcmdpbi10b3A6IDI1LjlyZW07XG4gICAgY29sb3I6ICMzNGQxODY7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgJi1idXR0b246bGluayxcbiAgICAmLWJ1dHRvbjp2aXNpdGVkIHtcbiAgICAgIGNvbG9yOiAjMzRkMTg2O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxuICAmX193YXJuaW5nIHtcbiAgICBtYXJnaW4tdG9wOiAuOHJlbTtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG59XG4uaW52YWxpZCB7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 2365:
/*!****************************************************************!*\
  !*** ./src/app/pages/verify-number/verify-number.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyNumberComponent": () => (/* binding */ VerifyNumberComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_country_code_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/country-code.service */ 2941);
/* harmony import */ var src_app_services_validations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/validations.service */ 681);
/* harmony import */ var _components_phone_input_phone_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/phone-input/phone-input.component */ 9185);




class VerifyNumberComponent {
    constructor(codeCountry, validations) {
        this.codeCountry = codeCountry;
        this.validations = validations;
        this.isValid = false;
    }
    ngOnInit() {
        this.countries = this.codeCountry.getCountries();
    }
    validateKeyValue(event) {
        console.log('evento', event);
        let isValid = this.validations.numberOnly(event);
        console.log('aux', isValid);
        this.isValid = isValid;
    }
}
VerifyNumberComponent.ɵfac = function VerifyNumberComponent_Factory(t) { return new (t || VerifyNumberComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_country_code_service__WEBPACK_IMPORTED_MODULE_0__.CountryCodeService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_validations_service__WEBPACK_IMPORTED_MODULE_1__.ValidationsService)); };
VerifyNumberComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: VerifyNumberComponent, selectors: [["app-verify-number"]], decls: 7, vars: 2, consts: [[1, "verify-number"], [1, "verify-number__container"], [1, "verify-number__title"], [1, "verify-number__info"], [3, "isValid", "countries", "keyValue"]], template: function VerifyNumberComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Enter your number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "We will send a code to verify your mobile number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "app-phone-input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyValue", function VerifyNumberComponent_Template_app_phone_input_keyValue_6_listener($event) { return ctx.validateKeyValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isValid", ctx.isValid)("countries", ctx.countries);
    } }, directives: [_components_phone_input_phone_input_component__WEBPACK_IMPORTED_MODULE_2__.PhoneInputComponent], styles: [".verify-number__title[_ngcontent-%COMP%] {\n  font-size: 2.3rem;\n  margin-bottom: 0.6rem;\n}\n.verify-number__info[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  width: 25.7rem;\n  line-height: 1.7rem;\n  margin-bottom: 1.2rem;\n  letter-spacing: -0.3px;\n}\n.verify-number__continue[_ngcontent-%COMP%] {\n  margin-top: 1.3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmeS1udW1iZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0FBQUo7QUFFRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQUFKO0FBR0U7RUFDRSxrQkFBQTtBQURKIiwiZmlsZSI6InZlcmlmeS1udW1iZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmVyaWZ5LW51bWJlciB7XG4gICZfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDIuM3JlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjZyZW07XG4gIH1cbiAgJl9faW5mbyB7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgd2lkdGg6IDI1LjdyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuN3JlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgfVxuXG4gICZfX2NvbnRpbnVlIHtcbiAgICBtYXJnaW4tdG9wOiAxLjNyZW07XG4gICAgLy8gJi1idXR0b24ge1xuICAgIC8vICAgd2lkdGg6IDMzLjdyZW07XG4gICAgLy8gICBoZWlnaHQ6IDUuNXJlbTtcbiAgICAvLyAgIGJhY2tncm91bmQ6ICMzNGQxODY7XG4gICAgLy8gICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbiAgICAvLyAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgLy8gICBmb250LXNpemU6IDEuN3JlbTtcbiAgICAvLyAgIGxpbmUtaGVpZ2h0OiAxMjUlO1xuICAgIC8vICAgY29sb3I6ICNmZmZmZmY7XG4gICAgLy8gICBib3JkZXI6IG5vbmU7XG4gICAgLy8gfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 8809:
/*!*************************************************************!*\
  !*** ./src/app/pages/verify-number/verify-number.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyNumberModule": () => (/* binding */ VerifyNumberModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 1321);
/* harmony import */ var _verify_number_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-number.component */ 2365);
/* harmony import */ var _components_phone_input_phone_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/phone-input/phone-input.component */ 9185);
/* harmony import */ var _components_image_select_image_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/image-select/image-select.component */ 2802);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);






class VerifyNumberModule {
}
VerifyNumberModule.ɵfac = function VerifyNumberModule_Factory(t) { return new (t || VerifyNumberModule)(); };
VerifyNumberModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: VerifyNumberModule });
VerifyNumberModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](VerifyNumberModule, { declarations: [_verify_number_component__WEBPACK_IMPORTED_MODULE_0__.VerifyNumberComponent,
        _components_phone_input_phone_input_component__WEBPACK_IMPORTED_MODULE_1__.PhoneInputComponent,
        _components_image_select_image_select_component__WEBPACK_IMPORTED_MODULE_2__.ImageSelectComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 2941:
/*!**************************************************!*\
  !*** ./src/app/services/country-code.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryCodeService": () => (/* binding */ CountryCodeService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class CountryCodeService {
    constructor() {
        this.codeCountries = [
            { name: 'Ecuador', img: 'https://www.countryflags.io/ec/shiny/32.png', code: '+593' },
            { name: 'Colombia', img: 'https://www.countryflags.io/co/shiny/32.png', code: '+522' },
            { name: 'Perú', img: 'https://www.countryflags.io/pe/shiny/32.png', code: '+213' },
        ];
    }
    getCountries() {
        return this.codeCountries;
    }
}
CountryCodeService.ɵfac = function CountryCodeService_Factory(t) { return new (t || CountryCodeService)(); };
CountryCodeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CountryCodeService, factory: CountryCodeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 681:
/*!*************************************************!*\
  !*** ./src/app/services/validations.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidationsService": () => (/* binding */ ValidationsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class ValidationsService {
    constructor() { }
    numberOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
}
ValidationsService.ɵfac = function ValidationsService_Factory(t) { return new (t || ValidationsService)(); };
ValidationsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ValidationsService, factory: ValidationsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 6461:
/*!***************************************************************!*\
  !*** ./node_modules/webpack/hot/ sync nonrecursive ^\.\/log$ ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./log": 7598
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6461;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(5142), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map