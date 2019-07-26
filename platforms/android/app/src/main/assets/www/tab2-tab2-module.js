(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");







var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.html":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header  translucent>\r\n    <ion-toolbar color=\"danger\">\r\n        <ion-title>Noticias Tuxtla - Nueva Noticia</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n    <form (ngSubmit)=\"addReport()\">\r\n        <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\r\n            <ion-item>\r\n                <ion-label position=\"floating\">Nombre <ion-text color=\"danger\">*</ion-text></ion-label>\r\n                <ion-input required=\"\" type=\"text\" [(ngModel)]=\"reportes.nameReport\" name=\"nameReport\"></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"floating\">Descripción <ion-text color=\"danger\">*</ion-text></ion-label>\r\n                <ion-input required=\"\" type=\"text\" [(ngModel)]=\"reportes.descripcion\" name=\"descripcion\"></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"floating\">Imagen <ion-text color=\"danger\">*</ion-text></ion-label>\r\n                <ion-input required=\"\" type=\"text\" [(ngModel)]=\"reportes.imagen\" name=\"imagen\"></ion-input>\r\n            </ion-item>\r\n        </ion-list>\r\n        <div class=\"ion-padding\">\r\n            <ion-button color=\"danger\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\">Crear Noticia</ion-button>\r\n        </div>\r\n    </form>\r\n</ion-content>\r\n    \r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_reports_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/reports/reports.service */ "./src/app/services/reports/reports.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var Tab2Page = /** @class */ (function () {
    function Tab2Page(reportService, router) {
        this.reportService = reportService;
        this.router = router;
        this.reportes = {};
    }
    Tab2Page.prototype.addReport = function () {
        var _this = this;
        this.reportService.addReports(this.reportes).subscribe(function (data) {
            _this.router.navigate(['/tabs/tab1'], { state: { updateInfos: true } });
        }, function (error) { return alert(error.message); });
    };
    Tab2Page.prototype.ngOnInit = function () { };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! ./tab2.page.html */ "./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_reports_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map