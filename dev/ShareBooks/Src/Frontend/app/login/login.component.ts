import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import {Observable} from 'rxjs/Rx';
import { LoginService } from './login.service';
import { SessionService } from '../core/SessionService';
import { ToastService } from '../core/toast/toast.service';
@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html',
  providers: [LoginService]
})
export class LoginComponent implements OnDestroy {
  private loginSub: Subscription;

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router,
    private toastService: ToastService,
    private sessionService: SessionService) {
  }

  public get isLoggedIn() : boolean {
    return this.sessionService.isLoggedIn;
  }

  login() {
      debugger;
    this.loginSub = this.loginService
      .login()
      .mergeMap(loginResult => this.route.queryParams)
      .map(qp => qp['redirectTo'])
      .subscribe(redirectTo => {
        this.toastService.activate(`Successfully logged in`);
        if (this.sessionService.isLoggedIn) {
          let url = redirectTo ? [redirectTo] : [ '/home' ];
          this.router.navigate(url);
        }
      });
  }

  logout() {
    this.loginService.logout();
    this.toastService.activate(`Successfully logged out`);
  }

  ngOnDestroy() {
    if (this.loginSub) {
      this.loginSub.unsubscribe();
    }
  }
}

 