import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { SessionService } from '../../app/core/SessionService';
import { SpinnerService } from '../../app/core/spinner/spinner.service';
@Injectable()
export class LoginService {
  constructor(
    //private spinnerService: SpinnerService,
    private sessionService: SessionService) {

     }

  login() {
    return Observable.of(true)
      //  .do(_ => this.spinnerService.show())
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
    this.sessionService.isLoggedIn = val;
   // this.spinnerService.hide();
  }
}

 