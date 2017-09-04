import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../Models/User';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
    userForm: FormGroup;
    user: User = new User();

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.buildForm();
    }

    buildForm(): void {
        this.userForm = this.fb.group({
            'name': [this.user.username, [
                Validators.required
            ]],
            'login': [this.user.login, [
                Validators.required
            ]],
            'password': [this.user.password, [
                    Validators.required
            ]],
            'confirm': ['', Validators.required ]
        })
    }

}
