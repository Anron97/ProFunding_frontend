import {Component} from '@angular/core';
import { Router } from '@angular/router'
import {States} from '../../../Constants/States';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    brand = 'ProFunding';
    constructor(private router: Router) {}

    SignUp(): void {
        this.router.navigate([ '/' + States.LOGIN ]);
    }
}