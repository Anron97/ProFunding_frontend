import {Component} from '@angular/core';
import { Router } from '@angular/router'
import {States} from '../../../constants/States';
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/user";
import {AuthenticationService} from "../../../services/authentication.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    user: User;
    constructor(private userService: UserService,
                private authService: AuthenticationService) {
        this.user = userService.getCurrentUser();
    }
    logOut() {
        this.authService.logout();
    }
}
