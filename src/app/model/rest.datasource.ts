import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';

const PROTOCOL = 'http';
const PORT = 8080;


@Injectable()
export class RestDataSource {
    baseUrl: string;
    constructor(private http: Http) {
        this.baseUrl = PROTOCOL + '://localhost/MyAPI/api';
    }

    getData(url: string) {
        return this.http.get(this.baseUrl + url).pipe(
            map(response => response.json())
        );
        //return this.http.get(this.baseUrl + "/products").pipe(map(response => response.json()));
    }

}
