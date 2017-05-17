import { Component, OnInit } from '@angular/core';
import { UserinfoService } from '../../userinfo/userinfo.service';
import { UserInfo } from '../../userinfo/userinfo';
import { Observable }     from 'rxjs/Observable';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor( private userinfoService : UserinfoService) { }
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
      name: {
        title: 'Full Name'
      },
      username: {
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
