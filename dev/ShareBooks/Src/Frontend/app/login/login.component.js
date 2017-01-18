"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var login_service_1 = require('./login.service');
var SessionService_1 = require('../core/SessionService');
var toast_service_1 = require('../core/toast/toast.service');
var LoginComponent = (function () {
    function LoginComponent(loginService, route, router, toastService, sessionService) {
        this.loginService = loginService;
        this.route = route;
        this.router = router;
        this.toastService = toastService;
        this.sessionService = sessionService;
    }
    Object.defineProperty(LoginComponent.prototype, "isLoggedIn", {
        get: function () {
            return this.sessionService.isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.login = function () {
        var _this = this;
        debugger;
        this.loginSub = this.loginService
            .login()
            .mergeMap(function (loginResult) { return _this.route.queryParams; })
            .map(function (qp) { return qp['redirectTo']; })
            .subscribe(function (redirectTo) {
            _this.toastService.activate("Successfully logged in");
            if (_this.sessionService.isLoggedIn) {
                var url = redirectTo ? [redirectTo] : ['/home'];
                _this.router.navigate(url);
            }
        });
    };
    LoginComponent.prototype.logout = function () {
        this.loginService.logout();
        this.toastService.activate("Successfully logged out");
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        if (this.loginSub) {
            this.loginSub.unsubscribe();
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'login.component.html',
            providers: [login_service_1.LoginService]
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, router_1.ActivatedRoute, router_1.Router, toast_service_1.ToastService, SessionService_1.SessionService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map