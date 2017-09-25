import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {UserService} from "../services/user.service";
import {User} from "../models/user";


@Injectable()
export class AdminGuard implements CanActivate {

    constructor(private router: Router, private userService: UserService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let user: User = this.userService.getCurrentUser();
        if (user && user.role === 'ROLE_ADMIN') {
            return true;
        }
        this.router.navigate(['']);
        return false;
    }
}
