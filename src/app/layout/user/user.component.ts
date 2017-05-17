import { Component, OnInit } from '@angular/core';
import { UserinfoService } from '../../userinfo/userinfo.service';
import { UserInfo } from '../../userinfo/userinfo';
import { Observable }     from 'rxjs/Observable';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  source: LocalDataSource;
  constructor( private userinfoService : UserinfoService) {
    this.source = new LocalDataSource();
    this.userinfoService.getAllUserInfo().then( users => {
      this.source.load(users.data.userList);
    } );
  }
  users : UserInfo[] ;

  ngOnInit():void {
      this.getUser();
  }
  getUser (): void {
      this.userinfoService.getAllUserInfo().then( users => {
        this.users = users.data.userList ;
      } );

  }
  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      userName: {
        title: 'Full Name'
      },
      loginName: {
        title: 'User Name'
      },
      email: {
        title: 'Email'
      }
    }
  };

  data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv"
    },

    // ... list of items

    {
      id: 11,
      name: "Nicholas DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz"
    }
  ];
}
