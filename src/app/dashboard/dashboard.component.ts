import { Component, OnInit } from '@angular/core';
import { UserinfoService } from './userinfo.service'
import { Observable }     from 'rxjs/Observable';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ UserinfoService ]
})
export class DashboardComponent implements OnInit {

    userInfos : UserInfo[] ;
    info : UserInfo;  
  constructor(private userInfo : UserinfoService ) { }

  ngOnInit() {
      this.userInfo.getUserInfo().then( res => {
        this.userInfos = res.data.userList;
          this.info =this.userInfos[0];
          alert(this.info.loginName);
      });
  }

}

export class UserInfo {
    address :String;
    age : Number;
    email :String;
    id : Number;
    loginName : String;
    password :String;
    phone : String; 
    photo : String;
    userName : String;
}