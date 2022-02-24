(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["smart-sip-pbx-smart-sip-pbx-module"],{

/***/ "2wLe":
/*!*****************************************************************************!*\
  !*** ./src/app/routes/smart-sip-pbx/sip-services/sip-services.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SipServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SipServicesComponent", function() { return SipServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ "tgey");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");








class SipServicesComponent {
    constructor() { }
    ngOnInit() {
    }
}
SipServicesComponent.ɵfac = function SipServicesComponent_Factory(t) { return new (t || SipServicesComponent)(); };
SipServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SipServicesComponent, selectors: [["app-sip-services"]], decls: 149, vars: 0, consts: [[1, "bg-blue-600"], [1, "row"], [1, "col-lg-12"], [1, "col-lg-6", "pd-m"], [1, "h-text"], [1, "tbone"], ["type", "checkbox"], [1, "col-lg-12", "stt"], ["mat-raised-button", "", "color", "primary", 1, "m-r-8"], [1, "wd"], ["placeholder", "Select Service"], ["value", "option"], ["placeholder", "Select SIP User"]], template: function SipServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Multiple User Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Select Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Call Forwarding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Call Forwarding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Call Pick-up\t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Call Park\t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Call Transfer\t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Recording ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Voice Mail ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Valet Park ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-card-subtitle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Select SIP User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "01129236733\t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "01129236733\t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "01129236733\t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "01129236733\t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "01129236733\t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "01129236733\t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "01129236733\t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "01129236733\t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "01129236733\t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "01129236733\t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "01129236733\t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "01129236733\t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "01129236733\t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "01129236733\t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "01129236733\t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "01129236733\t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Single User Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__["PageHeaderComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"]], styles: ["table.tbone[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\ntable.tbone[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n  font-size: 14px !important;\n  color: #675a5a;\n  line-height: 25px;\n}\n\nmat-card-subtitle.mat-card-subtitle.h-text[_ngcontent-%COMP%] {\n  background: #142149;\n  color: #fff;\n  padding: 15px;\n  font-size: 16px;\n}\n\n.col-lg-12.stt[_ngcontent-%COMP%] {\n  text-align: right;\n  margin: 15px 0px;\n}\n\nmat-form-field.mat-form-field.wd.ng-tns-c123-2.mat-primary.mat-form-field-type-mat-select.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-has-label.mat-form-field-hide-placeholder.ng-star-inserted[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\nmat-form-field.mat-form-field.wd.ng-tns-c123-4.mat-primary.mat-form-field-type-mat-select.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-has-label.mat-form-field-hide-placeholder.ng-star-inserted.mat-form-field-should-float.mat-focused[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2lwLXNlcnZpY2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUFBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFHSjs7QUFBQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFEQTtFQUNJLHNCQUFBO0FBSUo7O0FBRkE7RUFDSSxzQkFBQTtBQUtKIiwiZmlsZSI6InNpcC1zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlLnRib25lIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbnRhYmxlLnRib25lIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM2NzVhNWE7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxufVxyXG5tYXQtY2FyZC1zdWJ0aXRsZS5tYXQtY2FyZC1zdWJ0aXRsZS5oLXRleHQge1xyXG4gICAgYmFja2dyb3VuZDogIzE0MjE0OTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbn1cclxuLmNvbC1sZy0xMi5zdHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBtYXJnaW46IDE1cHggMHB4O1xyXG59XHJcbm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLndkLm5nLXRucy1jMTIzLTIubWF0LXByaW1hcnkubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtc2VsZWN0Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1oYXMtbGFiZWwubWF0LWZvcm0tZmllbGQtaGlkZS1wbGFjZWhvbGRlci5uZy1zdGFyLWluc2VydGVkIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQud2QubmctdG5zLWMxMjMtNC5tYXQtcHJpbWFyeS5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1zZWxlY3QubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLWhhcy1sYWJlbC5tYXQtZm9ybS1maWVsZC1oaWRlLXBsYWNlaG9sZGVyLm5nLXN0YXItaW5zZXJ0ZWQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0Lm1hdC1mb2N1c2VkIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "6bqX":
/*!******************************************************************************!*\
  !*** ./src/app/routes/smart-sip-pbx/date-time-manage/remote-data.service.ts ***!
  \******************************************************************************/
/*! exports provided: TablesRemoteDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesRemoteDataService", function() { return TablesRemoteDataService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class TablesRemoteDataService {
    constructor(http) {
        this.http = http;
    }
    getData(params = {}) {
        return this.http.get('https://api.github.com/search/repositories', { params });
    }
}
TablesRemoteDataService.ɵfac = function TablesRemoteDataService_Factory(t) { return new (t || TablesRemoteDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
TablesRemoteDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TablesRemoteDataService, factory: TablesRemoteDataService.ɵfac });


/***/ }),

/***/ "D12v":
/*!**********************************************************************!*\
  !*** ./src/app/routes/smart-sip-pbx/smart-sip-pbx-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: SmartSipPbxRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartSipPbxRoutingModule", function() { return SmartSipPbxRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _call_route_call_route_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./call-route/call-route.component */ "gaeo");
/* harmony import */ var _date_time_manage_date_time_manage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date-time-manage/date-time-manage.component */ "sh8N");
/* harmony import */ var _sip_gateway_sip_gateway_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sip-gateway/sip-gateway.component */ "E2C+");
/* harmony import */ var _sip_services_sip_services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sip-services/sip-services.component */ "2wLe");
/* harmony import */ var _sip_user_sip_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sip-user/sip-user.component */ "WABl");
/* harmony import */ var _user_group_user_group_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-group/user-group.component */ "xJ7p");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









const routes = [
    { path: 'sip-services', component: _sip_services_sip_services_component__WEBPACK_IMPORTED_MODULE_4__["SipServicesComponent"] },
    { path: 'sip-user', component: _sip_user_sip_user_component__WEBPACK_IMPORTED_MODULE_5__["SipUserComponent"] },
    { path: 'user-group', component: _user_group_user_group_component__WEBPACK_IMPORTED_MODULE_6__["UserGroupComponent"] },
    { path: 'sip-gateway', component: _sip_gateway_sip_gateway_component__WEBPACK_IMPORTED_MODULE_3__["SipGatewayComponent"] },
    { path: 'call-route', component: _call_route_call_route_component__WEBPACK_IMPORTED_MODULE_1__["CallRouteComponent"] },
    { path: 'date-time-manage', component: _date_time_manage_date_time_manage_component__WEBPACK_IMPORTED_MODULE_2__["DateTimeManageComponent"] },
];
class SmartSipPbxRoutingModule {
}
SmartSipPbxRoutingModule.ɵfac = function SmartSipPbxRoutingModule_Factory(t) { return new (t || SmartSipPbxRoutingModule)(); };
SmartSipPbxRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: SmartSipPbxRoutingModule });
SmartSipPbxRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](SmartSipPbxRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "DW3W":
/*!************************************************************************!*\
  !*** ./src/app/routes/smart-sip-pbx/user-group/remote-data.service.ts ***!
  \************************************************************************/
/*! exports provided: TablesRemoteDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesRemoteDataService", function() { return TablesRemoteDataService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class TablesRemoteDataService {
    constructor(http) {
        this.http = http;
    }
    getData(params = {}) {
        return this.http.get('https://api.github.com/search/repositories', { params });
    }
}
TablesRemoteDataService.ɵfac = function TablesRemoteDataService_Factory(t) { return new (t || TablesRemoteDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
TablesRemoteDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TablesRemoteDataService, factory: TablesRemoteDataService.ɵfac });


/***/ }),

/***/ "E2C+":
/*!***************************************************************************!*\
  !*** ./src/app/routes/smart-sip-pbx/sip-gateway/sip-gateway.component.ts ***!
  \***************************************************************************/
/*! exports provided: SipGatewayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SipGatewayComponent", function() { return SipGatewayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ "tgey");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./table/table.component */ "hMO+");













function SipGatewayComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Peer");
} }
function SipGatewayComponent_ng_template_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Distributor");
} }
class SipGatewayComponent {
    constructor() { }
    ngOnInit() {
    }
}
SipGatewayComponent.ɵfac = function SipGatewayComponent_Factory(t) { return new (t || SipGatewayComponent)(); };
SipGatewayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SipGatewayComponent, selectors: [["app-sip-gateway"]], decls: 111, vars: 0, consts: [[1, "bg-blue-600"], ["dynamicHeight", "", 1, "m--16"], ["mat-tab-label", ""], [1, "m-16"], [1, "form-field-full", 3, "formGroup"], ["fxLayout", "row wrap", "fxLayoutGap", "8px grid"], ["fxFlex", "33.3", "fxFlex.lt-sm", "100"], ["matInput", "", "placeholder", "Simple placeholder", "formControlName", "username", "required", ""], ["matInput", "", "placeholder", "Simple placeholder", "formControlName", "ip", "required", ""], ["matInput", "", "placeholder", "Simple placeholder", "formControlName", "Realm", "required", ""], ["required", "", "formControlName", "gender", "required", ""], ["value", "1"], ["value", "2"], ["matInput", "", "placeholder", "Simple placeholder", "formControlName", " concurrentchannel:", "required", ""], ["mat-raised-button", "", "color", "primary", 1, "m-t-8"], [1, "scetion-table"], ["fxFlex", "50", "fxFlex.lt-sm", "100"], ["matInput", "", "placeholder", "Simple placeholder", "formControlName", "Group Name", "required", ""], [1, "form-2"]], template: function SipGatewayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-tab-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SipGatewayComponent_ng_template_4_Template, 1, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " IP Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Realm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Transport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "-- None --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "lorem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "lorem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Concurrent Channel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "-- None --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "lorem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "lorem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "app-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, SipGatewayComponent_ng_template_58_Template, 1, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Add Own Group:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Group Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "-- None --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Select Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "lorem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Gateway");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "-- None --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "lorem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "lorem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " Ratio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "-- None --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "lorem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "lorem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "app-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__["PageHeaderComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _table_table_component__WEBPACK_IMPORTED_MODULE_12__["TableComponent"]], styles: [".scetion-table[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-block;\n  padding: 20px 0px;\n}\n\n.form-2[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-block;\n  margin: 20px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2lwLWdhdGV3YXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFFSiIsImZpbGUiOiJzaXAtZ2F0ZXdheS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY2V0aW9uLXRhYmxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcclxufVxyXG4uZm9ybS0ye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDIwcHggMHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "FXJ4":
/*!**********************************************************************!*\
  !*** ./src/app/routes/smart-sip-pbx/sip-user/remote-data.service.ts ***!
  \**********************************************************************/
/*! exports provided: TablesRemoteDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesRemoteDataService", function() { return TablesRemoteDataService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class TablesRemoteDataService {
    constructor(http) {
        this.http = http;
    }
    getData(params = {}) {
        return this.http.get('https://api.github.com/search/repositories', { params });
    }
}
TablesRemoteDataService.ɵfac = function TablesRemoteDataService_Factory(t) { return new (t || TablesRemoteDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
TablesRemoteDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TablesRemoteDataService, factory: TablesRemoteDataService.ɵfac });


/***/ }),

/***/ "NM4p":
/*!**************************************************************!*\
  !*** ./src/app/routes/smart-sip-pbx/smart-sip-pbx.module.ts ***!
  \**************************************************************/
/*! exports provided: SmartSipPbxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartSipPbxModule", function() { return SmartSipPbxModule; });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _smart_sip_pbx_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smart-sip-pbx-routing.module */ "D12v");
/* harmony import */ var _sip_services_sip_services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sip-services/sip-services.component */ "2wLe");
/* harmony import */ var _sip_user_sip_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sip-user/sip-user.component */ "WABl");
/* harmony import */ var _user_group_user_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-group/user-group.component */ "xJ7p");
/* harmony import */ var _sip_gateway_sip_gateway_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sip-gateway/sip-gateway.component */ "E2C+");
/* harmony import */ var _call_route_call_route_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./call-route/call-route.component */ "gaeo");
/* harmony import */ var _date_time_manage_date_time_manage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./date-time-manage/date-time-manage.component */ "sh8N");
/* harmony import */ var _sip_gateway_table_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sip-gateway/table/table.component */ "hMO+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










const COMPONENTS = [_sip_user_sip_user_component__WEBPACK_IMPORTED_MODULE_3__["SipUserComponent"], _sip_services_sip_services_component__WEBPACK_IMPORTED_MODULE_2__["SipServicesComponent"], _user_group_user_group_component__WEBPACK_IMPORTED_MODULE_4__["UserGroupComponent"]];
const COMPONENTS_DYNAMIC = [];
class SmartSipPbxModule {
}
SmartSipPbxModule.ɵfac = function SmartSipPbxModule_Factory(t) { return new (t || SmartSipPbxModule)(); };
SmartSipPbxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: SmartSipPbxModule });
SmartSipPbxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _shared__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
            _smart_sip_pbx_routing_module__WEBPACK_IMPORTED_MODULE_1__["SmartSipPbxRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](SmartSipPbxModule, { declarations: [_sip_user_sip_user_component__WEBPACK_IMPORTED_MODULE_3__["SipUserComponent"], _sip_services_sip_services_component__WEBPACK_IMPORTED_MODULE_2__["SipServicesComponent"], _user_group_user_group_component__WEBPACK_IMPORTED_MODULE_4__["UserGroupComponent"], _sip_user_sip_user_component__WEBPACK_IMPORTED_MODULE_3__["SipUserComponent"], _sip_services_sip_services_component__WEBPACK_IMPORTED_MODULE_2__["SipServicesComponent"], _user_group_user_group_component__WEBPACK_IMPORTED_MODULE_4__["UserGroupComponent"], _sip_gateway_sip_gateway_component__WEBPACK_IMPORTED_MODULE_5__["SipGatewayComponent"], _call_route_call_route_component__WEBPACK_IMPORTED_MODULE_6__["CallRouteComponent"], _date_time_manage_date_time_manage_component__WEBPACK_IMPORTED_MODULE_7__["DateTimeManageComponent"], _sip_gateway_table_table_component__WEBPACK_IMPORTED_MODULE_8__["TableComponent"]], imports: [_shared__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
        _smart_sip_pbx_routing_module__WEBPACK_IMPORTED_MODULE_1__["SmartSipPbxRoutingModule"]] }); })();


/***/ }),

/***/ "WABl":
/*!*********************************************************************!*\
  !*** ./src/app/routes/smart-sip-pbx/sip-user/sip-user.component.ts ***!
  \*********************************************************************/
/*! exports provided: SipUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SipUserComponent", function() { return SipUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sip_user_remote_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sip-user/remote-data.service */ "FXJ4");
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ "tgey");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-matero/extensions/data-grid */ "hGDI");












const _c0 = function () { return [5, 10, 20]; };
class SipUserComponent {
    constructor(remoteSrv, cdr) {
        this.remoteSrv = remoteSrv;
        this.cdr = cdr;
        this.columns = [
            {
                header: 'NAME',
                field: 'name',
                formatter: (data) => `<a href="${data.html_url}" target="_blank">${data.name}</a>`,
            },
            { header: 'NUMBER', field: 'number' },
            { header: 'PROFILE', field: 'profile', },
            { header: 'GROUP', field: 'group' },
            { header: 'DEVICE IP', field: 'device ip', type: 'number' },
            { header: 'STATUS', field: 'status', },
            { header: 'ACTION', field: 'action', },
            { header: 'ALL', field: 'all', },
        ];
        this.list = [];
        this.total = 0;
        this.isLoading = true;
        this.query = {
            q: 'user:nzbin',
            sort: 'stars',
            order: 'desc',
            page: 0,
            per_page: 10,
        };
    }
    get params() {
        const p = Object.assign({}, this.query);
        p.page += 1;
        return p;
    }
    ngOnInit() {
        // this.getData();
        this.isLoading = false;
    }
    getData() {
        this.isLoading = true;
        this.remoteSrv.getData(this.params).subscribe(res => {
            this.list = res.items;
            this.total = res.total_count;
            this.isLoading = false;
            this.cdr.detectChanges();
        }, () => {
            this.isLoading = false;
            this.cdr.detectChanges();
        }, () => {
            this.isLoading = false;
            this.cdr.detectChanges();
        });
    }
    getNextPage(e) {
        this.query.page = e.pageIndex;
        this.query.per_page = e.pageSize;
        this.getData();
    }
    search() {
        this.query.page = 0;
        this.getData();
    }
}
SipUserComponent.ɵfac = function SipUserComponent_Factory(t) { return new (t || SipUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sip_user_remote_data_service__WEBPACK_IMPORTED_MODULE_1__["TablesRemoteDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
SipUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SipUserComponent, selectors: [["app-sip-user"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_sip_user_remote_data_service__WEBPACK_IMPORTED_MODULE_1__["TablesRemoteDataService"]])], decls: 38, vars: 12, consts: [[1, "bg-blue-600"], [1, "col-lg-12", "stt"], ["mat-raised-button", "", "color", "primary", 1, "m-r-8"], [1, "m-r-8"], ["matInput", "", "name", "q", "placeholder", "Query String", 3, "ngModel", "ngModelChange"], ["name", "sort", "placeholder", "Sort", 3, "ngModel", "ngModelChange"], ["value", "stars"], ["value", "forks"], ["value", "updated"], ["name", "order", "placeholder", "Order", 3, "ngModel", "ngModelChange"], ["value", "desc"], ["value", "asc"], ["mat-raised-button", "", "color", "primary", 1, "m-r-8", 3, "click"], [3, "data", "columns", "length", "loading", "pageOnFront", "pageIndex", "pageSize", "pageSizeOptions", "page"]], template: function SipUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Batch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Export");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SipUserComponent_Template_input_ngModelChange_16_listener($event) { return ctx.query.q = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SipUserComponent_Template_mat_select_ngModelChange_18_listener($event) { return ctx.query.sort = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "-- None --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "stars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "forks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "updated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SipUserComponent_Template_mat_select_ngModelChange_28_listener($event) { return ctx.query.order = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "-- None --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SipUserComponent_Template_button_click_35_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mtx-grid", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function SipUserComponent_Template_mtx_grid_page_37_listener($event) { return ctx.getNextPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.query.q);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.query.sort);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.query.order);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.list)("columns", ctx.columns)("length", ctx.total)("loading", ctx.isLoading)("pageOnFront", false)("pageIndex", ctx.query.page)("pageSize", ctx.query.per_page)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
    } }, directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__["PageHeaderComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_9__["MtxGridComponent"]], styles: ["[_nghost-%COMP%]     .mtx-grid {\n  height: 480px;\n}\n\n.mat-header-cell[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 14px !important;\n}\n\n.col-lg-12.stt[_ngcontent-%COMP%] {\n  text-align: right;\n  margin: 15px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2lwLXVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQkFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBRUoiLCJmaWxlIjoic2lwLXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLm10eC1ncmlkIHtcclxuICAgIGhlaWdodDogNDgwcHg7XHJcbiAgfVxyXG4gIFxyXG4ubWF0LWhlYWRlci1jZWxsIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC41NCk7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmNvbC1sZy0xMi5zdHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBtYXJnaW46IDE1cHggMHB4O1xyXG59XHJcblxyXG4gICJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ "gaeo":
/*!*************************************************************************!*\
  !*** ./src/app/routes/smart-sip-pbx/call-route/call-route.component.ts ***!
  \*************************************************************************/
/*! exports provided: CallRouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallRouteComponent", function() { return CallRouteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _call_route_remote_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../call-route/remote-data.service */ "xbje");
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ "tgey");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-matero/extensions/data-grid */ "hGDI");












const _c0 = function () { return [5, 10, 20]; };
class CallRouteComponent {
    constructor(remoteSrv, cdr) {
        this.remoteSrv = remoteSrv;
        this.cdr = cdr;
        this.columns = [
            {
                header: 'S.NO.',
                field: 's.no.',
                formatter: (data) => `<a href="${data.html_url}" target="_blank">${data.name}</a>`,
            },
            { header: 'ROUTE NAME', field: 'name' },
            { header: 'ROUTE SERVICES', field: 'route services', },
            { header: 'ROUTE TYPE', field: 'route type' },
            { header: 'ACTON', field: 'action', type: 'number' },
        ];
        this.list = [];
        this.total = 0;
        this.isLoading = true;
        this.query = {
            q: 'user:nzbin',
            sort: 'stars',
            order: 'desc',
            page: 0,
            per_page: 10,
        };
    }
    get params() {
        const p = Object.assign({}, this.query);
        p.page += 1;
        return p;
    }
    ngOnInit() {
        // this.getData();
        this.isLoading = false;
    }
    getData() {
        this.isLoading = true;
        this.remoteSrv.getData(this.params).subscribe(res => {
            this.list = res.items;
            this.total = res.total_count;
            this.isLoading = false;
            this.cdr.detectChanges();
        }, () => {
            this.isLoading = false;
            this.cdr.detectChanges();
        }, () => {
            this.isLoading = false;
            this.cdr.detectChanges();
        });
    }
    getNextPage(e) {
        this.query.page = e.pageIndex;
        this.query.per_page = e.pageSize;
        this.getData();
    }
    search() {
        this.query.page = 0;
        this.getData();
    }
}
CallRouteComponent.ɵfac = function CallRouteComponent_Factory(t) { return new (t || CallRouteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_call_route_remote_data_service__WEBPACK_IMPORTED_MODULE_1__["TablesRemoteDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
CallRouteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CallRouteComponent, selectors: [["app-call-route"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_call_route_remote_data_service__WEBPACK_IMPORTED_MODULE_1__["TablesRemoteDataService"]])], decls: 28, vars: 12, consts: [[1, "bg-blue-600"], [1, "col-lg-12", "stt"], ["mat-raised-button", "", "color", "primary", 1, "m-r-8"], [1, "m-r-8"], ["matInput", "", "name", "q", "placeholder", "Query String", 3, "ngModel", "ngModelChange"], ["name", "sort", "placeholder", "Sort", 3, "ngModel", "ngModelChange"], ["value", "stars"], ["value", "forks"], ["value", "updated"], ["name", "order", "placeholder", "Order", 3, "ngModel", "ngModelChange"], ["value", "desc"], ["value", "asc"], ["mat-raised-button", "", "color", "primary", 1, "m-r-8", 3, "click"], [3, "data", "columns", "length", "loading", "pageOnFront", "pageIndex", "pageSize", "pageSizeOptions", "page"]], template: function CallRouteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ADD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CallRouteComponent_Template_input_ngModelChange_6_listener($event) { return ctx.query.q = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CallRouteComponent_Template_mat_select_ngModelChange_8_listener($event) { return ctx.query.sort = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "-- None --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "stars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "forks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "updated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CallRouteComponent_Template_mat_select_ngModelChange_18_listener($event) { return ctx.query.order = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "-- None --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CallRouteComponent_Template_button_click_25_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mtx-grid", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function CallRouteComponent_Template_mtx_grid_page_27_listener($event) { return ctx.getNextPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.query.q);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.query.sort);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.query.order);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.list)("columns", ctx.columns)("length", ctx.total)("loading", ctx.isLoading)("pageOnFront", false)("pageIndex", ctx.query.page)("pageSize", ctx.query.per_page)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
    } }, directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__["PageHeaderComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_9__["MtxGridComponent"]], styles: [".col-lg-12.stt[_ngcontent-%COMP%] {\n  text-align: right;\n  margin: 15px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2FsbC1yb3V0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJjYWxsLXJvdXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbC1sZy0xMi5zdHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBtYXJnaW46IDE1cHggMHB4O1xyXG59Il19 */"], changeDetection: 0 });


/***/ }),

/***/ "sh8N":
/*!*************************************************************************************!*\
  !*** ./src/app/routes/smart-sip-pbx/date-time-manage/date-time-manage.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DateTimeManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeManageComponent", function() { return DateTimeManageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _date_time_manage_remote_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../date-time-manage/remote-data.service */ "6bqX");
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ "tgey");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-matero/extensions/data-grid */ "hGDI");












const _c0 = function () { return [5, 10, 20]; };
class DateTimeManageComponent {
    constructor(remoteSrv, cdr) {
        this.remoteSrv = remoteSrv;
        this.cdr = cdr;
        this.columns = [
            {
                header: 'NAME',
                field: 'name',
                formatter: (data) => `<a href="${data.html_url}" target="_blank">${data.name}</a>`,
            },
            { header: 'DATE OPTIONS', field: 'date options' },
            { header: 'WEEK DAYS', field: 'week days', },
            { header: 'TIME OPTIONS', field: 'time options' },
            { header: 'ACTON', field: 'action', type: 'number' },
        ];
        this.list = [];
        this.total = 0;
        this.isLoading = false;
        this.query = {
            q: 'user:nzbin',
            sort: 'stars',
            order: 'desc',
            page: 0,
            per_page: 10,
        };
    }
    get params() {
        const p = Object.assign({}, this.query);
        p.page += 1;
        return p;
    }
    ngOnInit() {
        // this.getData();
    }
    getData() {
        this.isLoading = true;
        this.remoteSrv.getData(this.params).subscribe(res => {
            this.list = res.items;
            this.total = res.total_count;
            this.isLoading = false;
            this.cdr.detectChanges();
        }, () => {
            this.isLoading = false;
            this.cdr.detectChanges();
        }, () => {
            this.isLoading = false;
            this.cdr.detectChanges();
        });
    }
    getNextPage(e) {
        this.query.page = e.pageIndex;
        this.query.per_page = e.pageSize;
        this.getData();
    }
    search() {
        this.query.page = 0;
        this.getData();
    }
}
DateTimeManageComponent.ɵfac = function DateTimeManageComponent_Factory(t) { return new (t || DateTimeManageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_date_time_manage_remote_data_service__WEBPACK_IMPORTED_MODULE_1__["TablesRemoteDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
DateTimeManageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DateTimeManageComponent, selectors: [["app-date-time-manage"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_date_time_manage_remote_data_service__WEBPACK_IMPORTED_MODULE_1__["TablesRemoteDataService"]])], decls: 28, vars: 12, consts: [[1, "bg-blue-600"], [1, "col-lg-12", "stt"], ["mat-raised-button", "", "color", "primary", 1, "m-r-8"], [1, "m-r-8"], ["matInput", "", "name", "q", "placeholder", "Query String", 3, "ngModel", "ngModelChange"], ["name", "sort", "placeholder", "Sort", 3, "ngModel", "ngModelChange"], ["value", "stars"], ["value", "forks"], ["value", "updated"], ["name", "order", "placeholder", "Order", 3, "ngModel", "ngModelChange"], ["value", "desc"], ["value", "asc"], ["mat-raised-button", "", "color", "primary", 1, "m-r-8", 3, "click"], [3, "data", "columns", "length", "loading", "pageOnFront", "pageIndex", "pageSize", "pageSizeOptions", "page"]], template: function DateTimeManageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ADD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DateTimeManageComponent_Template_input_ngModelChange_6_listener($event) { return ctx.query.q = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DateTimeManageComponent_Template_mat_select_ngModelChange_8_listener($event) { return ctx.query.sort = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "-- None --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "stars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "forks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "updated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DateTimeManageComponent_Template_mat_select_ngModelChange_18_listener($event) { return ctx.query.order = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "-- None --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateTimeManageComponent_Template_button_click_25_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mtx-grid", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function DateTimeManageComponent_Template_mtx_grid_page_27_listener($event) { return ctx.getNextPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.query.q);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.query.sort);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.query.order);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.list)("columns", ctx.columns)("length", ctx.total)("loading", ctx.isLoading)("pageOnFront", false)("pageIndex", ctx.query.page)("pageSize", ctx.query.per_page)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
    } }, directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__["PageHeaderComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_9__["MtxGridComponent"]], styles: [".col-lg-12.stt[_ngcontent-%COMP%] {\n  text-align: right;\n  margin: 15px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZGF0ZS10aW1lLW1hbmFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJkYXRlLXRpbWUtbWFuYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbC1sZy0xMi5zdHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBtYXJnaW46IDE1cHggMHB4O1xyXG59Il19 */"], changeDetection: 0 });


/***/ }),

/***/ "xJ7p":
/*!*************************************************************************!*\
  !*** ./src/app/routes/smart-sip-pbx/user-group/user-group.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGroupComponent", function() { return UserGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_group_remote_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-group/remote-data.service */ "DW3W");
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ "tgey");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-matero/extensions/data-grid */ "hGDI");












const _c0 = function () { return [5, 10, 20]; };
class UserGroupComponent {
    constructor(remoteSrv, cdr) {
        this.remoteSrv = remoteSrv;
        this.cdr = cdr;
        this.columns = [
            {
                header: 'NAME',
                field: 'name',
                formatter: (data) => `<a href="${data.html_url}" target="_blank">${data.name}</a>`,
            },
            { header: 'G.EXPRESSION', field: 'G.Expression' },
            { header: 'TRUNK IN-ID', field: 'Trunk In-ID', },
            { header: 'Trunk OUT-ID', field: 'Trunk Out-ID' },
            { header: 'INCOMING', field: 'incoming', type: 'number' },
            { header: 'OUTGOING', field: 'out going', },
            { header: 'ACTION', field: 'action', },
        ];
        this.list = [];
        this.total = 0;
        this.isLoading = true;
        this.query = {
            q: 'user:nzbin',
            sort: 'stars',
            order: 'desc',
            page: 0,
            per_page: 10,
        };
    }
    get params() {
        const p = Object.assign({}, this.query);
        p.page += 1;
        return p;
    }
    ngOnInit() {
        // this.getData();
        this.isLoading = false;
    }
    getData() {
        this.isLoading = true;
        this.remoteSrv.getData(this.params).subscribe(res => {
            this.list = res.items;
            this.total = res.total_count;
            this.isLoading = false;
            this.cdr.detectChanges();
        }, () => {
            this.isLoading = false;
            this.cdr.detectChanges();
        }, () => {
            this.isLoading = false;
            this.cdr.detectChanges();
        });
    }
    getNextPage(e) {
        this.query.page = e.pageIndex;
        this.query.per_page = e.pageSize;
        this.getData();
    }
    search() {
        this.query.page = 0;
        this.getData();
    }
}
UserGroupComponent.ɵfac = function UserGroupComponent_Factory(t) { return new (t || UserGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_group_remote_data_service__WEBPACK_IMPORTED_MODULE_1__["TablesRemoteDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
UserGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserGroupComponent, selectors: [["app-user-group"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_user_group_remote_data_service__WEBPACK_IMPORTED_MODULE_1__["TablesRemoteDataService"]])], decls: 30, vars: 12, consts: [[1, "bg-blue-600"], [1, "col-lg-12", "stt"], ["mat-raised-button", "", "color", "primary", 1, "m-r-8"], [1, "m-r-8"], ["matInput", "", "name", "q", "placeholder", "Query String", 3, "ngModel", "ngModelChange"], ["name", "sort", "placeholder", "Sort", 3, "ngModel", "ngModelChange"], ["value", "stars"], ["value", "forks"], ["value", "updated"], ["name", "order", "placeholder", "Order", 3, "ngModel", "ngModelChange"], ["value", "desc"], ["value", "asc"], ["mat-raised-button", "", "color", "primary", 1, "m-r-8", 3, "click"], [3, "data", "columns", "length", "loading", "pageOnFront", "pageIndex", "pageSize", "pageSizeOptions", "page"]], template: function UserGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Reload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserGroupComponent_Template_input_ngModelChange_8_listener($event) { return ctx.query.q = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserGroupComponent_Template_mat_select_ngModelChange_10_listener($event) { return ctx.query.sort = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "-- None --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "stars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "forks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "updated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserGroupComponent_Template_mat_select_ngModelChange_20_listener($event) { return ctx.query.order = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "-- None --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserGroupComponent_Template_button_click_27_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mtx-grid", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function UserGroupComponent_Template_mtx_grid_page_29_listener($event) { return ctx.getNextPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.query.q);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.query.sort);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.query.order);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.list)("columns", ctx.columns)("length", ctx.total)("loading", ctx.isLoading)("pageOnFront", false)("pageIndex", ctx.query.page)("pageSize", ctx.query.per_page)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
    } }, directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__["PageHeaderComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _ng_matero_extensions_data_grid__WEBPACK_IMPORTED_MODULE_9__["MtxGridComponent"]], styles: ["[_nghost-%COMP%]     .mtx-grid {\n  height: 480px;\n}\n\n.mat-header-cell[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 14px !important;\n}\n\n.col-lg-12.stt[_ngcontent-%COMP%] {\n  text-align: right;\n  margin: 15px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdXNlci1ncm91cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLDBCQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFDRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFFSiIsImZpbGUiOiJ1c2VyLWdyb3VwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5tdHgtZ3JpZCB7XHJcbiAgICBoZWlnaHQ6IDQ4MHB4O1xyXG4gIH1cclxuICBcclxuLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNTQpO1xyXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5jb2wtbGctMTIuc3R0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luOiAxNXB4IDBweDtcclxufVxyXG4gICJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ "xbje":
/*!************************************************************************!*\
  !*** ./src/app/routes/smart-sip-pbx/call-route/remote-data.service.ts ***!
  \************************************************************************/
/*! exports provided: TablesRemoteDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesRemoteDataService", function() { return TablesRemoteDataService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class TablesRemoteDataService {
    constructor(http) {
        this.http = http;
    }
    getData(params = {}) {
        return this.http.get('https://api.github.com/search/repositories', { params });
    }
}
TablesRemoteDataService.ɵfac = function TablesRemoteDataService_Factory(t) { return new (t || TablesRemoteDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
TablesRemoteDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TablesRemoteDataService, factory: TablesRemoteDataService.ɵfac });


/***/ })

}]);
//# sourceMappingURL=smart-sip-pbx-smart-sip-pbx-module-es2015.js.map