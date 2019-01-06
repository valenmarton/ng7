import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//these datas and functions we can import anywhere
//for example server connection logic comes here
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  firstClick() {
    return console.log('Clicked..');
  }

  getUsers() {
    return this.http.get('https://reqres.in/api/users');

  }
}
