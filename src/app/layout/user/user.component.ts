import { Component, OnInit } from '@angular/core';
import { UserinfoService } from './service/userinfo.service';
import { UserInfo } from './model/userinfo';
import { Observable }     from 'rxjs/Observable';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  source: LocalDataSource;
  constructor(private userinfoService: UserinfoService) {
    this.source = new LocalDataSource();
    this.userinfoService.getAllUserInfo().then(users => {
      this.source.load(users.data.userList);
    });
  }
  users: UserInfo[];

  ngOnInit(): void {
    this.getUser();
  }
  getUser(): void {
    this.userinfoService.getAllUserInfo().then(users => {
      this.users = users.data.userList;
    });

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
    },
    selectMode: 'multi',
    actions: {
      position: 'right'
    },
    ///mode : 'external',
    hideSubHeader: true,

    delete: {
      confirmDelete: true,
    },
    edit: {
      confirmSave: true,
    },
    mode: 'external'
  }

  onDeleteConfirm(event) {
    if (window.confirm('Are you sure you want to delete?')) {
      this.userinfoService.deleteUser(event.data.id).then(data => {
        alert(data.message);
      });
    } else {

    }
  }
  onSaveConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {

    } else {

    }
  }
}
