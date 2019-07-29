(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-user-pages-login-login-login-module"],{

/***/ "./src/app/auth/user/pages/login/login/login.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/auth/user/pages/login/login/login.module.ts ***!
  \*************************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/auth/user/pages/login/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/auth/user/pages/login/login/login.page.html":
/*!*************************************************************!*\
  !*** ./src/app/auth/user/pages/login/login/login.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"danger\">\r\n        <ion-title>Noticias Tuxtla - Iniciar Sesión</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding>\r\n    <form (ngSubmit)=\"login()\" method=\"post\">\r\n        <ion-item>\r\n            <ion-label position=\"floating\">Email</ion-label>\r\n            <ion-input ngModel type=\"email\" [(ngModel)]=\"user.email\" name=\"email\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"floating\">Contraseña</ion-label>\r\n            <ion-input ngModel type=\"password\" [(ngModel)]=\"user.password\" name=\"password\"></ion-input>\r\n        </ion-item>\r\n        <ion-button type=\"submit\" expand=\"full\" color=\"danger\">Iniciar Sesión</ion-button>\r\n    </form>\r\n    <p text-center>¿No tienes una cuenta?</p>\r\n    <ion-button routerLink=\"/register\" expand=\"full\" color=\"primary\" >Registrarse</ion-button>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/auth/user/pages/login/login/login.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/auth/user/pages/login/login/login.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvdXNlci9wYWdlcy9sb2dpbi9sb2dpbi9sb2dpbi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/auth/user/pages/login/login/login.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/auth/user/pages/login/login/login.page.ts ***!
  \***********************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/auth/user.service */ "./src/app/services/auth/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var LoginPage = /** @class */ (function () {
    function LoginPage(userService, router, loadingController) {
        this.userService = userService;
        this.router = router;
        this.loadingController = loadingController;
        this.user = {};
        console.log(this.userService.auth());
        if (this.userService.isActive() == 'true')
            this.router.navigate(['tabs/tab1']);
    }
    LoginPage.prototype.ngOnInit = function () { };
    LoginPage.prototype.login = function () {
        var _this = this;
        if (this.user['email'] === undefined && this.user['password'] === undefined) {
            alert("proporciona tus credenciales");
            return;
        }
        this.userService.login(this.user).subscribe(function (result) {
            _this.user = {};
            _this.userService.saveUserData(result);
            _this.router.navigate(['tabs/tab1']);
            _this.presentLoadingWithOptions();
        }, function (error) {
            alert("Email o password incorrectos");
        });
    };
    LoginPage.prototype.presentLoadingWithOptions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            spinner: 'circles',
                            duration: 1000,
                            message: 'Logeado correctamente',
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
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/auth/user/pages/login/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/auth/user/pages/login/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=auth-user-pages-login-login-login-module.js.map