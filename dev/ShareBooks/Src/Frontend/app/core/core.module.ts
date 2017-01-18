import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
//other components
import { ExceptionService } from './exception.service';
import { MessageService } from './message.service';
import { NavComponent } from './nav/nav.component';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { ToastModule } from './toast/toast.module';
// imports: imports the module's exports. which is usually declarables and providers
// exports: exports modules AND components/directives/pipes that other modules may want to use
@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule,ToastModule
  ],
  exports: [
    CommonModule, FormsModule, RouterModule,ToastModule, [NavComponent]
  ],
  declarations: [NavComponent],
  providers: [ExceptionService,
    MessageService ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
     throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}