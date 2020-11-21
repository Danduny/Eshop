import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = "http://kodytek.cz:8080/rest-api/api/0202a2e4-1699-4e6a-9ce2-29f22ff7153b";

  constructor(private _http: HttpClient ) { }


 
}
