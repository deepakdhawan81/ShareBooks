import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { LoginService } from './login.service';

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
    private router: Router) {
  }

  public get isLoggedIn() : boolean {
    return true;
  }

  login() {
    this.loginSub = this.loginService
      .login()
      .mergeMap(loginResult => this.route.queryParams)
      .map(qp => qp['redirectTo'])
      .subscribe(redirectTo => {
      
        if (true) {
          let url = redirectTo ? [redirectTo] : [ '/dashboard' ];
          this.router.navigate(url);
        }
      });
  }

  logout() {
    this.loginService.logout();
  }

  ngOnDestroy() {
    if (this.loginSub) {
      this.loginSub.unsubscribe();
    }
  }
}

