import { Injectable } from '@angular/core';

import { ApiService } from '../service/api.service';

@Injectable()
export class LoginService {

    url = '/system/login/signIn';
    constructor(private apiService :ApiService) { }

    login(loginName : String ,password : String)  {
        return this.apiService.post(this.url, JSON.stringify({loginName:loginName,password:password}));
        
    }
   
}
