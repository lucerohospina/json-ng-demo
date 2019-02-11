import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _url: string = "../assets/data/employees.json";

  constructor(private http: HttpClient) { }

  
//  getUsers() {
//    return this.http.get('https://jsonplaceholder.typicode.com/users');
//  }

  getUsers() {
    return this.http.get(this._url);
  }
}
