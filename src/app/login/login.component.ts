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
    
  constructor(private router: Router ,private  loginService : LoginService) { }

  ngOnInit() {
  }
    gotoDashboard(){
        this.loginService.login(this.loginName,this.password).then(message => {
            if(message.code === 0){
                alert(message.message);
                this.router.navigate(['/dashboard']);
            }else{
                alert(message.message);
            }
            
        });
        
    }
}
