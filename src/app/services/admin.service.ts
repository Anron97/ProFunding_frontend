import {Injectable} from "@angular/core";
import {User} from "../models/user";
import {Http} from "@angular/http";

@Injectable()
export class AdminService {

    constructor(private http: Http) {

    }

    deleteUsers(users: User[]) {

    }

    blockUsers(users: User[]) {

    }

    unblockUsers(users: User[]) {

    }
}
