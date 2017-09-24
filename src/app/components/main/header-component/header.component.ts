import {Component} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/user";
import {AuthenticationService} from "../../../services/authentication.service";
import { LocaleService, Language } from 'angular-l10n';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Language() lang;
    user: User;

    language = false;
    constructor(private userService: UserService,
                private authService: AuthenticationService, private locale: LocaleService) {
        this.userService.currentUser.subscribe(user => this.user = user)
    }
    logOut() {
        this.authService.logout();
        this.user = this.userService.getCurrentUser();
    }
    changeLanguage() {
        this.locale.setCurrentLanguage((this.language) ? 'rus' : 'en');
        this.language = !this.language;
    }
}
