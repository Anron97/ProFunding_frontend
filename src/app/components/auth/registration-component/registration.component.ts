import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../models/User';
import {UserService} from '../../../services/user.service';
import {AuthenticationService} from '../../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
    userForm: FormGroup;
    user: User = new User();

    constructor( private fb: FormBuilder,
                 private router: Router,
                 private userService: UserService,
                 private authService: AuthenticationService) {}

    ngOnInit(): void {
        this.buildForm();
    }

    buildForm(): void {
        this.userForm = this.fb.group({
            'name': [this.user.username, [
                Validators.required
            ]],
            'email': [this.user.email, [
                Validators.required
            ]],
            'password': [this.user.password, [
                    Validators.required
            ]],
            'confirm': ['', Validators.required ]
        })
    }

    register() {
        console.log(this.user)
        this.userService.create(this.user).subscribe(
            data => {
                this.router.navigate([''])
                this.authService.login(this.user.username, this.user.password)
            },
                    error => console.log(error)
            );
    }


}
