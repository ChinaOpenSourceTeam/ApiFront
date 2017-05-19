import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { AppConfig } from '../app.config';

import 'rxjs/add/operator/toPromise';
@Injectable()
export class ApiService {

  public storage: Storage = sessionStorage;

  constructor(private http: Http, private appConfig: AppConfig) { }

  get(url: string): Promise<any> {
    return this.http.get(this.appConfig.baseUrl + url, { headers: this.appendAuthHeader() })
      .toPromise()
      .then(res => res.json() as String)
      .catch(this.handleError);
  }

  post(url: string, data: string): Promise<any> {
    return this.http.post(this.appConfig.baseUrl + url, data, { headers: this.appendAuthHeader() })
      .toPromise()
      .then(res => res.json() as String)
      .catch(this.handleError);
  }

  delete(url: string): Promise<any> {
    return this.http.delete(this.appConfig.baseUrl + url, { headers: this.appendAuthHeader() })
      .toPromise()
      .then(res => res.json() as String)
      .catch(this.handleError);
  }

  appendAuthHeader(): Headers {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let token = this.storage.getItem('Token');
    if (token !== null) {
      headers.append("Authorization", token);
    }
    return headers;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
