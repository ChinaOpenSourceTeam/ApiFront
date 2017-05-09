import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { AdduserComponent } from './adduser/adduser.component';

const routes: Routes = [
    { path: '', component: UserComponent },
    { path: 'adduser', component: AdduserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
