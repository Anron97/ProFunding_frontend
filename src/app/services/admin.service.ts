import {Injectable} from "@angular/core";
import {User} from "../models/user";
import {Http} from "@angular/http";
import {API_URL} from "../constants/API";
import {UserService} from "./user.service";

@Injectable()
export class AdminService {

    constructor(private http: Http,
                private userService: UserService) {

    }

    getUsers() {
        return this.http.get(API_URL + '/admin', this.userService.jwt())
            .map(response => response.json());
    }

    deleteUsers(users: User[]) {
        return this.http.post(API_URL + '/admin/delete', users, this.userService.jwt())
            .map(response => response.json());
    }

    blockUsers(users: User[]) {
        console.log(users);
        return this.http.post(API_URL + '/admin/block', users, this.userService.jwt())
            .map(response => response.json());
    }

    unblockUsers(users: User[]) {
        console.log(users);
        return this.http.post(API_URL + '/admin/unblock', users, this.userService.jwt())
            .map(response => response.json());
    }
}
