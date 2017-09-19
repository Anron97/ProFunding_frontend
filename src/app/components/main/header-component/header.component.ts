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
        this.userService.currentUser.subscribe(user => this.user = user)
    }
    logOut() {
        this.authService.logout();
        this.user = this.userService.getCurrentUser();
    }
}
