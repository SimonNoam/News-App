import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroments';
@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http: HttpClient) { }

  newApiUrl = environment.API_HEADLINE;

  techApiUrl = environment.API_TECH

  businessApiUrl = environment.API_BUSINESS;

  topHeading(): Observable<any> {
    return this._http.get(this.newApiUrl);
  }

  techNews(): Observable<any> {
    return this._http.get(this.techApiUrl)
  }

  businessNews(): Observable<any> {
    return this._http.get(this.businessApiUrl)
  }
}

