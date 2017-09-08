import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {User} from '../models/user';
import 'rxjs/add/operator/map';
import {API_URL} from '../constants/API';



@Injectable()
export class UserService {
    constructor(private http: Http) { }

    create(user: User) {
        return this.http.post(API_URL+'/registration', user).map((response: Response) => response.json());
    }

    private jwt() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
