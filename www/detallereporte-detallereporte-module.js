(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detallereporte-detallereporte-module"],{

/***/ "./src/app/detallereporte/detallereporte.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/detallereporte/detallereporte.module.ts ***!
  \*********************************************************/
/*! exports provided: DetallereportePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallereportePageModule", function() { return DetallereportePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detallereporte_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detallereporte.page */ "./src/app/detallereporte/detallereporte.page.ts");







var routes = [
    {
        path: '',
        component: _detallereporte_page__WEBPACK_IMPORTED_MODULE_6__["DetallereportePage"]
    }
];
var DetallereportePageModule = /** @class */ (function () {
    function DetallereportePageModule() {
    }
    DetallereportePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_detallereporte_page__WEBPACK_IMPORTED_MODULE_6__["DetallereportePage"]]
        })
    ], DetallereportePageModule);
    return DetallereportePageModule;
}());



/***/ }),

/***/ "./src/app/detallereporte/detallereporte.page.html":
/*!*********************************************************!*\
  !*** ./src/app/detallereporte/detallereporte.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-title>Detalle Noticia</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n  <ion-card >\r\n      <img [src]=\"report.imagen\" />\r\n      <ion-card-header>\r\n          <ion-card-subtitle>Nombre</ion-card-subtitle>\r\n          <ion-card-title>Fecha</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n          Descripción\r\n      </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/detallereporte/detallereporte.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/detallereporte/detallereporte.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFsbGVyZXBvcnRlL2RldGFsbGVyZXBvcnRlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/detallereporte/detallereporte.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/detallereporte/detallereporte.page.ts ***!
  \*******************************************************/
/*! exports provided: DetallereportePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallereportePage", function() { return DetallereportePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetallereportePage = /** @class */ (function () {
    function DetallereportePage() {
    }
    DetallereportePage.prototype.ngOnInit = function () {
    };
    DetallereportePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detallereporte',
            template: __webpack_require__(/*! ./detallereporte.page.html */ "./src/app/detallereporte/detallereporte.page.html"),
            styles: [__webpack_require__(/*! ./detallereporte.page.scss */ "./src/app/detallereporte/detallereporte.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DetallereportePage);
    return DetallereportePage;
}());



/***/ })

}]);
//# sourceMappingURL=detallereporte-detallereporte-module.js.map