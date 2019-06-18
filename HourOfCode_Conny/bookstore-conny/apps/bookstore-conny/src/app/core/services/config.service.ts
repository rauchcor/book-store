import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { API_BASE_URL } from './api/SwaggerWebAPI';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  apiUrl: any;

  constructor(private httpClient: HttpClient) {
  }

  init() {
    this.httpClient.get('./assets/env.json')
      .toPromise()
      .then((value: any) => {
        this.apiUrl = value.apiUrl;
      });
  }
  getApiUrl() {
   return this.apiUrl;
  }
}
