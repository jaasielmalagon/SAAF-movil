import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './Objects/user.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const PROTOCOL = 'http';
const PORT = 8080;

@Injectable()
export class RestDataSource{
  baseUrl: string;
  constructor(private http: Http){
    this.baseUrl = 'http://localhost/MyAPI/api';
  }

  getUser(username:string, password:string):Observable<any>{
    return this.http.get(this.baseUrl + "/users/"+username+"/"+password);
    //.pipe(map(response => response.json()));
  }
  
}
