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

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-title>Detalle Noticia</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n\r\n\r\n  <ion-card (click)=\"presentActionSheet(report)\">\r\n      <img [src]=\"report.imagen\"/>\r\n\r\n      <ion-card-header>\r\n          <ion-card-subtitle>{{report.fecha | date}}</ion-card-subtitle>\r\n          <ion-card-subtitle>Reportado por: {{reporter.name}}</ion-card-subtitle>\r\n          <ion-card-title>{{report.nameReport}}</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n          {{report.descripcion}} <br>\r\n      </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_auth_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth/user.service */ "./src/app/services/auth/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_reports_reports_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/reports/reports.service */ "./src/app/services/reports/reports.service.ts");








var DetallereportePage = /** @class */ (function () {
    function DetallereportePage(reportServices, actionSheetController, alertController, userService, router, loadingController, reportsService) {
        this.reportServices = reportServices;
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.userService = userService;
        this.router = router;
        this.loadingController = loadingController;
        this.reportsService = reportsService;
        this.reportId = null;
        this.report = [];
        this.reporter = [];
    }
    DetallereportePage.prototype.presentActionSheet = function (report) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Noticias',
                            buttons: [{}, {
                                    text: 'Editar',
                                    icon: 'create',
                                    handler: function () {
                                        console.log('Favorite clicked');
                                        _this.presentAlertPrompt(report);
                                    }
                                }, {
                                    text: 'Cancelar',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DetallereportePage.prototype.presentAlertPrompt = function (report) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Editar Noticia',
                            inputs: [
                                {
                                    name: 'name',
                                    type: 'text',
                                    value: report.nameReport,
                                    placeholder: 'Nombre'
                                },
                                {
                                    name: 'desc',
                                    type: 'text',
                                    value: report.descripcion,
                                    placeholder: 'Descripción'
                                },
                            ],
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Cancelar');
                                    }
                                }, {
                                    text: 'Guardar',
                                    handler: function (data) {
                                        console.log('Confirm Ok');
                                        console.log(data.name);
                                        console.log(data.desc);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DetallereportePage.prototype.ngOnInit = function () {
    };
    DetallereportePage.prototype.getReport = function (reportId) {
        var _this = this;
        this.reportsService.getReport(reportId).subscribe(function (result) {
            _this.report = result['report'];
            _this.reporter = result['user'];
        }, function (error) {
            console.log(error.message);
        });
    };
    DetallereportePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detallereporte',
            template: __webpack_require__(/*! ./detallereporte.page.html */ "./src/app/detallereporte/detallereporte.page.html"),
            styles: [__webpack_require__(/*! ./detallereporte.page.scss */ "./src/app/detallereporte/detallereporte.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_reports_reports_service__WEBPACK_IMPORTED_MODULE_5__["ReportsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _services_auth_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _services_reports_reports_service__WEBPACK_IMPORTED_MODULE_5__["ReportsService"]])
    ], DetallereportePage);
    return DetallereportePage;
}());



/***/ })

}]);
//# sourceMappingURL=detallereporte-detallereporte-module.js.map