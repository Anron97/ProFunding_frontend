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
    invalid = false;

    constructor(
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
        if (this.userForm.invalid) {
            this.invalid = true;
            return
        }
        this.authService.login(this.userForm.value.login, this.userForm.value.password).subscribe(
            data => console.log("Data:" + data),
                 error => console.log("error: " + error)
        )
    }
}
