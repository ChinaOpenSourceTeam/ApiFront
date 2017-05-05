import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserinfoService {

    public storage: Storage = sessionStorage;

    private loginUrl = 'http://120.55.171.108:38080/system/user/findAllUser';
    private headers = new Headers({ 'Content-Type': 'application/json' ,'Authorization': this.storage.getItem('Token')});
    constructor(private http: Http) { }

    getUserInfo(): Promise<any> {
        return this.http.get(this.loginUrl, { headers: this.headers })
            .toPromise()
            .then(res => res.json() as String)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}
