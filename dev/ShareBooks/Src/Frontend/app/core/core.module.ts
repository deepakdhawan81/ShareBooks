import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
//other components
import { NavComponent } from './nav/nav.component';



// exports: exports modules AND components/directives/pipes that other modules may want to use
@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule
  ],
  exports: [
    CommonModule, FormsModule, RouterModule, [NavComponent]
  ],
  declarations: [NavComponent],
  providers: [ ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    //todo:
  }
}