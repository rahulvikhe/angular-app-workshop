import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchdataService {


  constructor(private http:HttpClient) {}

  apiFromnodejs(){
    console.log('func called');
    return this.http.get('http://localhost:9000/users');
  }
}