import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

export const BASE_URL_API = environment.baseUrlApi;

@Injectable()
export class AppService {

  public endpoint = '/';

  constructor(public http: HttpClient) {}

  public generateHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token
    });
  }

  async get(url: any): Promise<any> {
    const headers = this.generateHeaders();
    return this.http.get(url, { headers: headers }).toPromise();
  }
}
