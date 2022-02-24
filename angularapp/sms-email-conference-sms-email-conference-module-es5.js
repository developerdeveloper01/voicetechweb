(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sms-email-conference-sms-email-conference-module"], {
    /***/
    "37qt": function qt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SmsEmailConferenceModule", function () {
        return SmsEmailConferenceModule;
      });
      /* harmony import */


      var _sms_email_conference_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./sms-email-conference-routing.module */
      "eCfy");
      /* harmony import */


      var _sms_template_sms_template_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sms-template/sms-template.component */
      "KAu/");
      /* harmony import */


      var _email_template_email_template_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./email-template/email-template.component */
      "AdGU");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var COMPONENTS = [_sms_template_sms_template_component__WEBPACK_IMPORTED_MODULE_1__["SmsTemplateComponent"], _email_template_email_template_component__WEBPACK_IMPORTED_MODULE_2__["EmailTemplateComponent"]];
      var COMPONENTS_DYNAMIC = [];

      var SmsEmailConferenceModule = function SmsEmailConferenceModule() {
        _classCallCheck(this, SmsEmailConferenceModule);
      };

      SmsEmailConferenceModule.ɵfac = function SmsEmailConferenceModule_Factory(t) {
        return new (t || SmsEmailConferenceModule)();
      };

      SmsEmailConferenceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: SmsEmailConferenceModule
      });
      SmsEmailConferenceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _sms_email_conference_routing_module__WEBPACK_IMPORTED_MODULE_0__["SmsEmailConferenceRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SmsEmailConferenceModule, {
          declarations: [_sms_template_sms_template_component__WEBPACK_IMPORTED_MODULE_1__["SmsTemplateComponent"], _email_template_email_template_component__WEBPACK_IMPORTED_MODULE_2__["EmailTemplateComponent"], _sms_template_sms_template_component__WEBPACK_IMPORTED_MODULE_1__["SmsTemplateComponent"], _email_template_email_template_component__WEBPACK_IMPORTED_MODULE_2__["EmailTemplateComponent"]],
          imports: [_shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _sms_email_conference_routing_module__WEBPACK_IMPORTED_MODULE_0__["SmsEmailConferenceRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "AdGU": function AdGU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmailTemplateComponent", function () {
        return EmailTemplateComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/components/page-header/page-header.component */
      "tgey");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");

      function EmailTemplateComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "nbbnbnbnb");
        }
      }

      function EmailTemplateComponent_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "nbbnbnbnb");
        }
      }

      function EmailTemplateComponent_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "nbbnbnbnb");
        }
      }

      var EmailTemplateComponent = /*#__PURE__*/function () {
        function EmailTemplateComponent() {
          _classCallCheck(this, EmailTemplateComponent);
        }

        _createClass(EmailTemplateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return EmailTemplateComponent;
      }();

      EmailTemplateComponent.ɵfac = function EmailTemplateComponent_Factory(t) {
        return new (t || EmailTemplateComponent)();
      };

      EmailTemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EmailTemplateComponent,
        selectors: [["app-email-template"]],
        decls: 16,
        vars: 0,
        consts: [[1, "bg-blue-600"], ["dynamicHeight", ""], ["mat-tab-label", ""]],
        template: function EmailTemplateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "page-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab-group", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EmailTemplateComponent_ng_template_5_Template, 1, 0, "ng-template", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " hjhjhjhjh ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EmailTemplateComponent_ng_template_9_Template, 1, 0, "ng-template", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " jhjhjhj ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EmailTemplateComponent_ng_template_13_Template, 1, 0, "ng-template", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " hhhjhjhjhj ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__["PageHeaderComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabLabel"]],
        styles: [".example-input-label[_ngcontent-%COMP%], .example-add-tab-button[_ngcontent-%COMP%], .example-delete-tab-button[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZW1haWwtdGVtcGxhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdFLFdBQUE7QUFDRiIsImZpbGUiOiJlbWFpbC10ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWlucHV0LWxhYmVsLFxyXG4uZXhhbXBsZS1hZGQtdGFiLWJ1dHRvbixcclxuLmV4YW1wbGUtZGVsZXRlLXRhYi1idXR0b24ge1xyXG4gIG1hcmdpbjogOHB4O1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    "KAu/": function KAu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SmsTemplateComponent", function () {
        return SmsTemplateComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SmsTemplateComponent = /*#__PURE__*/function () {
        function SmsTemplateComponent() {
          _classCallCheck(this, SmsTemplateComponent);
        }

        _createClass(SmsTemplateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SmsTemplateComponent;
      }();

      SmsTemplateComponent.ɵfac = function SmsTemplateComponent_Factory(t) {
        return new (t || SmsTemplateComponent)();
      };

      SmsTemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SmsTemplateComponent,
        selectors: [["app-sms-template"]],
        decls: 2,
        vars: 0,
        template: function SmsTemplateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sms-template works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbXMtdGVtcGxhdGUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "eCfy": function eCfy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SmsEmailConferenceRoutingModule", function () {
        return SmsEmailConferenceRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _email_template_email_template_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./email-template/email-template.component */
      "AdGU");
      /* harmony import */


      var _sms_template_sms_template_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sms-template/sms-template.component */
      "KAu/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'sms-template',
        component: _sms_template_sms_template_component__WEBPACK_IMPORTED_MODULE_2__["SmsTemplateComponent"]
      }, {
        path: 'email-template',
        component: _email_template_email_template_component__WEBPACK_IMPORTED_MODULE_1__["EmailTemplateComponent"]
      }];

      var SmsEmailConferenceRoutingModule = function SmsEmailConferenceRoutingModule() {
        _classCallCheck(this, SmsEmailConferenceRoutingModule);
      };

      SmsEmailConferenceRoutingModule.ɵfac = function SmsEmailConferenceRoutingModule_Factory(t) {
        return new (t || SmsEmailConferenceRoutingModule)();
      };

      SmsEmailConferenceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: SmsEmailConferenceRoutingModule
      });
      SmsEmailConferenceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SmsEmailConferenceRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=sms-email-conference-sms-email-conference-module-es5.js.map