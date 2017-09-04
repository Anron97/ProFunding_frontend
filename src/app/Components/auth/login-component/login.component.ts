import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../Models/User';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    userForm: FormGroup;
    user: User = new User();

    constructor(
        private router: Router,
        private fb: FormBuilder
    ) {}

    ngOnInit(): void {
        this.buildForm();
    }

    buildForm(): void {
        this.userForm = this.fb.group({
            'login': [this.user.login, Validators.required],
            'password': [this.user.password, Validators.required]
        });
    }
}
