import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable }     from 'rxjs/Observable';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginName : String ;
    password : String  ;

     public storage: Storage = sessionStorage;

  constructor(private router: Router ,private  loginService : LoginService) { }

  ngOnInit() {
  }
    gotoDashboard(){
        this.loginService.login(this.loginName,this.password).then(message => {
            if(message.code === 0){
                this.storage.setItem('LoginName', this.loginName+'');
                this.storage.setItem('Token', message.data.token);
                this.router.navigate(['/layout']);
            }else{
                alert(message.message);
            }

        });

    }
}
