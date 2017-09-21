import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {User} from '../models/user';
import 'rxjs/add/operator/map';
import {API_URL} from '../constants/API';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Project} from "../models/project";


@Injectable()
export class UserService {

    private userSource = new BehaviorSubject<User>(this.getCurrentUser());
    currentUser = this.userSource.asObservable();

    constructor(private http: Http) {
    }

    downloadUserFromLocalStorage() {
        this.setUser(this.getCurrentUser());
    }

    setUser(user: User) {
        this.userSource.next(user)
    }

    create(user: User) {
        return this.http.post(API_URL + '/registration', user).map((response: Response) => response.json());
    }

    getCurrentUser(): User {
        if (typeof localStorage !== 'undefined') {
            return JSON.parse(localStorage.getItem('currentUser'))
        }
    }

    saveUser(user: User) {
        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
        }
    }

    removeUser() {
        localStorage.removeItem('currentUser');
    }

    getUserById(id: number) {
        console.log(API_URL + '/profile/' + id)
        return this.http.get(API_URL + '/profile/' + id).map((response: Response) => response.json());
    }

    updateProfile(user: User) {
        this.http.post(API_URL + '/users/update', user).subscribe();
    }

    addProjectToCurrentUser(project: Project) {
        let user = this.getCurrentUser();
        user.projects.push(project);
        console.log(user);
        this.saveUser(user);
    }


    public jwt() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({'authentication': currentUser.token});
            headers.append("Content-Type", "application/json");
            return new RequestOptions({headers: headers});
        }
    }
}
