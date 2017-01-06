import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { SpinnerService } from '../../app/core';

@Injectable()
export class LoginService {
  constructor(
    private spinnerService: SpinnerService) { }

  login() {
    return Observable.of(true)
        .do(_ => this.spinnerService.show())
        .delay(1000)
        .do(this.toggleLogState.bind(this));
        // .do((val: boolean) => {
        //   this.isLoggedIn = true;
        //   console.log(this.isLoggedIn);
        // });
  }

  logout() {
    this.toggleLogState(false);
  }

  private toggleLogState(val: boolean) {

    this.spinnerService.hide();
  }
}

 