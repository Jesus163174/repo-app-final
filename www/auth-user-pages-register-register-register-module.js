(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-user-pages-register-register-register-module"],{

/***/ "./src/app/auth/user/pages/register/register/register.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/auth/user/pages/register/register/register.module.ts ***!
  \**********************************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/auth/user/pages/register/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/auth/user/pages/register/register/register.page.html":
/*!**********************************************************************!*\
  !*** ./src/app/auth/user/pages/register/register/register.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    \r\n    <ion-title>Noticias Tuxtla - Registrarse</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding>\r\n  <form #form=\"ngForm\" (ngSubmit)=\"register()\" method=\"post\">\r\n    <ion-item>\r\n        <ion-label position=\"floating\">Nombre</ion-label>\r\n        <ion-input [(ngModel)]=\"user.name\" name=\"name\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Apellido</ion-label>\r\n      <ion-input [(ngModel)]=\"user.apellido\" name=\"apellido\"></ion-input>\r\n  </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Tipo</ion-label>\r\n      <ion-input [(ngModel)]=\"user.rol\" name=\"rol\"></ion-input>\r\n  </ion-item>\r\n  \r\n    <ion-item>\r\n      <ion-label position=\"floating\">Email</ion-label>\r\n      <ion-input type=\"email\" [(ngModel)]=\"user.email\" name=\"email\"></ion-input>\r\n    </ion-item>\r\n  \r\n    <ion-item>\r\n      <ion-label position=\"floating\">Contraseña</ion-label>\r\n      <ion-input type=\"password\" [(ngModel)]=\"user.password\" name=\"password\"></ion-input>\r\n    </ion-item>\r\n  \r\n    <ion-button type=\"submit\" expand=\"full\" color=\"danger\">Registrarse</ion-button>\r\n  </form>\r\n  <p text-center>¿Ya tienes una cuenta?</p>\r\n  <ion-button expand=\"full\" color=\"primary\" routerLink=\"/login\">Iniciar Sesión</ion-button>\r\n</ion-content>  "

/***/ }),

/***/ "./src/app/auth/user/pages/register/register/register.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/auth/user/pages/register/register/register.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvdXNlci9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/auth/user/pages/register/register/register.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/auth/user/pages/register/register/register.page.ts ***!
  \********************************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/auth/user.service */ "./src/app/services/auth/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegisterPage = /** @class */ (function () {
    function RegisterPage(router, loadingController, userService) {
        this.router = router;
        this.loadingController = loadingController;
        this.userService = userService;
        this.user = {};
    }
    RegisterPage.prototype.register = function () {
        var _this = this;
        this.userService.register(this.user).subscribe(function (result) {
            _this.presentLoadingWithOptions();
            _this.router.navigate(['tabs/tab1']);
        }, function (error) {
            alert("Error al registrarse");
        });
    };
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.presentLoadingWithOptions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            spinner: 'circles',
                            duration: 1000,
                            message: 'Registrado correctamente',
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
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/auth/user/pages/register/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/auth/user/pages/register/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _services_auth_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=auth-user-pages-register-register-register-module.js.map