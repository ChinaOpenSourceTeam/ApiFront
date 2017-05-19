import { Injectable } from '@angular/core';

import { ApiService } from '../../../service/api.service';
import { UserInfo } from '../model/userinfo';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserinfoService {

  public storage: Storage = sessionStorage;

  constructor(private apiService: ApiService) { }

  getUserInfo(): Promise<any> {
    let url = '/system/user/findUserByLoginName?loginName=' + this.storage.getItem('LoginName');
    return this.apiService.get(url);
  }

  getAllUserInfo(): Promise<any> {
    let url = '/system/user/findAllUser';
    return this.apiService.get(url);
  }

  saveUser(user: UserInfo): Promise<any> {
    let url = "/system/user/saveUser";
    return this.apiService.post(url, JSON.stringify(user));
  }

}
