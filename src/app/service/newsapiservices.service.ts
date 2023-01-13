import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }
  // e35a561c2e254fe4b3ca2dcc6cacf659
  newApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=e35a561c2e254fe4b3ca2dcc6cacf659"
 
  techApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=e35a561c2e254fe4b3ca2dcc6cacf659"

  businessApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e35a561c2e254fe4b3ca2dcc6cacf659"

  topHeading():Observable<any>{
    return this._http.get(this.newApiUrl);
  }
  
  techNews():Observable<any>{
    return this._http.get(this.techApiUrl)
  }

  businessNews():Observable<any>{
    return this._http.get(this.businessApiUrl)
  }
}

