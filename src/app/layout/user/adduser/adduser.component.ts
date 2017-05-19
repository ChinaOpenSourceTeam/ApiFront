import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../model/userinfo';
import { UserinfoService } from '../service/userinfo.service';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private userinfoServic: UserinfoService) { }

  model: UserInfo = new UserInfo();
  ngOnInit() {
  }

  onSubmit() {
    this.userinfoServic.saveUser(this.model).then(data => {
      alert(data.message);
    });
    alert(JSON.stringify(this.model));
  }

}
