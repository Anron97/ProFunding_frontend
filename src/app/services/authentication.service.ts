import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import {API_URL} from '../constants/API';
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(username: string, password: string): Observable<any> {
        return this.http.post(API_URL + '/login', { username, password })
            .map((response: Response) => {
                let user = response.json();
                if (user && user.token) {
                    console.log(user);
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            })
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
}
