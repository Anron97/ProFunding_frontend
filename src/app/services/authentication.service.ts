import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import {API_URL} from '../constants/API';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(username: string, password: string) {
        return this.http.post(API_URL + '/login', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                let user = response.json();
                if (user && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
}
