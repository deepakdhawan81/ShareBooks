import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth-guard.service';
import { CanDeactivateGuard } from './core/can-deactivate-guard.service';
import { SessionService } from './core/SessionService';
import { PageNotFoundComponent } from './page-not-found.component';

/***************************************************************
* Lazy Loading to Eager Loading
*
* 1. Remove the module and NgModule imports in `app.module.ts`
*
* 2. Remove the lazy load route from `app.routing.ts`
*
* 3. Change the module's default route path from '' to 'pathname'
*****************************************************************/
const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home', },
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [AuthGuard,
    CanDeactivateGuard,
    SessionService ]
})
export class AppRoutingModule { }


 