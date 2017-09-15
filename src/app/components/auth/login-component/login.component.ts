import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../models/user';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../services/authentication.service';

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
        private fb: FormBuilder,
        private authService: AuthenticationService
    ) {}

    ngOnInit(): void {
        this.buildForm();
    }

    buildForm(): void {
        this.userForm = this.fb.group({
            'login': [this.user.email, Validators.required],
            'password': [this.user.password, Validators.required]
        });
    }

    login() {
        console.log(this.userForm.value.login + ", " + this.userForm.value.password)
        this.authService.login(this.userForm.value.login, this.userForm.value.password)
        console.log("AAAAAAA");
    }
}
