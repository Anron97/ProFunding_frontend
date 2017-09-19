import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import {API_URL} from '../constants/API';
import {Observable} from "rxjs/Observable";
import {UserService} from "./user.service";

@Injectable()
export class AuthenticationService {
    constructor(private http: Http,
                private userService: UserService) { }

    login(username: string, password: string): Observable<any> {
        return this.http.post(API_URL + '/login', { username, password })
            .map((response: Response) => {
                let user = response.json();
                if (user && user.token) {
                    this.userService.saveUser(user);
                    this.userService.downloadUserFromLocalStorage();
                }
            })
    }

    logout() {
        this.userService.removeUser();
    }
}
