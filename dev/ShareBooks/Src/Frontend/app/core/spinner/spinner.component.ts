import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SpinnerState, SpinnerService } from './spinner.service';

@Component({
  moduleId: module.id,
  selector: 'kickOn-spinner',
  templateUrl: 'spinner.component.html'
})
export class SpinnerComponent implements OnDestroy, OnInit {
  visible = false;

  private spinnerStateChanged: Subscription;

  constructor(private spinnerService: SpinnerService) { }

  ngOnInit() {
    componentHandler.upgradeDom();
    this.spinnerStateChanged = this.spinnerService.spinnerState
      .subscribe((state: SpinnerState) => this.visible = state.show);
  }

  ngOnDestroy() {
    this.spinnerStateChanged.unsubscribe();
  }
}

 