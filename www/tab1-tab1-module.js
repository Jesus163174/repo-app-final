(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.html":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header  translucent>\r\n    <ion-toolbar color=\"danger\">\r\n        <ion-title>Noticias Tuxtla</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen class=\"background-primary\">\r\n    <ion-card>\r\n        <ion-item>\r\n            <ion-icon name=\"person\" slot=\"start\"></ion-icon>\r\n            <ion-label>{{dataUser.name}}</ion-label>\r\n        </ion-item>\r\n        <ion-card-content>\r\n            <ion-button (click)=\"logout()\" expand=\"full\" color=\"danger\">Salir</ion-button>\r\n        </ion-card-content>\r\n    </ion-card>\r\n    <ion-card *ngFor=\"let report of reports\" (click)=\"presentActionSheet(report)\">\r\n        <img [src]=\"report.imagen\" />\r\n        <ion-card-header>\r\n            <ion-card-subtitle>{{report.nameReport}}</ion-card-subtitle>\r\n            <ion-card-title>{{report.fecha}}</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n            {{report.descripcion}}\r\n        </ion-card-content>\r\n    </ion-card>\r\n</ion-content>\r\n<ion-fab routerLink=\"/tabs/tab2\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button color=\"danger\" size=\"small\">\r\n        <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n</ion-fab>\r\n"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.avatar {\n  width: 20px;\n  height: 20px; }\n\n.padding-profile {\n  padding: 20px 20px; }\n\n.profile {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9DOlxcVXNlcnNcXHVzdWFyaW9cXERvY3VtZW50c1xcZGV2anNcXGFwbGljYWNpb25lcyBtb3ZpbGVzXFxmaW5hbC9zcmNcXGFwcFxcdGFiMVxcdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFFZDtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmF2YXRhcntcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cbi5wYWRkaW5nLXByb2ZpbGV7XG4gIHBhZGRpbmc6IDIwcHggMjBweDtcbn1cblxuLnByb2ZpbGV7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_reports_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/reports/reports.service */ "./src/app/services/reports/reports.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth/user.service */ "./src/app/services/auth/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var Tab1Page = /** @class */ (function () {
    function Tab1Page(reportServices, actionSheetController, alertController, userService, router, loadingController) {
        this.reportServices = reportServices;
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.userService = userService;
        this.router = router;
        this.loadingController = loadingController;
        this.reports = null;
        this.dataUser = [];
        this.getReports(0);
        this.dataUser = this.userService.auth();
    }
    Tab1Page.prototype.ionViewWillEnter = function () {
        this.getReports(0);
    };
    Tab1Page.prototype.getReports = function (reporter_id) {
        var _this = this;
        this.reportServices.getAllReports(reporter_id).subscribe(function (reports) {
            console.log(reports);
            _this.reports = reports['reports'];
            console.log(_this.reports);
        }, function (error) {
            alert("error: " + error.message);
        });
    };
    Tab1Page.prototype.logout = function () {
        this.userService.logout();
        this.presentLoadingWithOptions();
        this.router.navigate(['/login']);
    };
    Tab1Page.prototype.presentLoadingWithOptions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            spinner: 'circles',
                            duration: 1000,
                            message: 'Cerrando sesión',
                            translucent: true,
                            cssClass: 'custom-class custom-loading'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Tab1Page.prototype.presentActionSheet = function (report) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Noticias',
                            buttons: [{
                                    text: 'Eliminar',
                                    role: 'destructive',
                                    icon: 'trash',
                                    handler: function () {
                                        console.log('Delete clicked');
                                        _this.presentAlertConfirm();
                                    }
                                }, {
                                    text: 'Editar',
                                    icon: 'create',
                                    handler: function () {
                                        console.log('Favorite clicked');
                                        _this.presentAlertPrompt(report);
                                    }
                                }, {
                                    text: 'Detalle',
                                    icon: 'eye',
                                    handler: function () {
                                        console.log('Favorite clicked');
                                        _this.router.navigate(["/detallereporte/" + report.id]);
                                    },
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
    Tab1Page.prototype.presentAlertConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '¿Estás seguro?',
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Confirmar',
                                    handler: function () {
                                        console.log('Confirm Okay');
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
    Tab1Page.prototype.presentAlertPrompt = function (report) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
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
                                        _this.reportServices.updateReports(report.id, data.name, data.desc).subscribe((function (data) {
                                            _this.updateReportSuccessful(report.id);
                                        }));
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
    Tab1Page.prototype.updateReportSuccessful = function (report) {
        alert("Reporte actualizado correctamente");
        this.router.navigate(["/detallereporte/" + report]);
    };
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_reports_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map