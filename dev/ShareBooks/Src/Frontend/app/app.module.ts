import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { PageNotFoundComponent } from './page-not-found.component';
/* Feature Modules */
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [BrowserModule,HttpModule,
   // Routes get loaded in order. It is important that login
    // come before AppRoutingModule, as
    // AppRoutingModule defines the catch-all ** route
    AppRoutingModule,
    CoreModule,],
  declarations: [AppComponent,PageNotFoundComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}