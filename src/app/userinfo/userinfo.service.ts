import { Injectable } from '@angular/core';

import { ApiService } from '../service/api.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserinfoService {

    public storage: Storage = sessionStorage;
    url = '/system/user/findUserByLoginName?loginName='+this.storage.getItem('LoginName');
    constructor(private apiService :ApiService) { }

    getUserInfo(): Promise<any> {
        return this.apiService.get(this.url);
    }

}
