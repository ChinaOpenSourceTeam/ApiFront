import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule }   from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UserinfoService } from './service/userinfo.service';

@NgModule({
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    UserRoutingModule,
    FormsModule
  ],
  declarations: [UserComponent, AdduserComponent],
  providers : [UserinfoService]
})
export class UserModule { }
