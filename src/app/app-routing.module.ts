import { NgModule }             from '@angular/core';
import { RouterModule,Routes}   from '@angular/router';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',      component: LoginComponent},
  { path: 'layout', loadChildren: './layout/layout.module#LayoutModule' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
