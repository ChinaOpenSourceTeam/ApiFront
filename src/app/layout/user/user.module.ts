import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UserinfoService } from '../../userinfo/userinfo.service';

@NgModule({
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    UserRoutingModule
  ],
  declarations: [UserComponent, AdduserComponent],
  providers : [UserinfoService]
})
export class UserModule { }
