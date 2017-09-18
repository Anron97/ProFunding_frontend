import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../models/user';
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
    invalid = false;
    error = false;

    constructor(private fb: FormBuilder,
                private router: Router,
                private userService: UserService,
                private authService: AuthenticationService) {
    }

    ngOnInit(): void {
        this.buildForm();
    }

    buildForm(): void {
        this.userForm = this.fb.group({
            'name': [this.user.username, [
                Validators.required
            ]],
            'email': [this.user.email, [
                Validators.required,
                Validators.email
            ]],
            'password': [this.user.password, [
                Validators.required
            ]]
        })
    }

    register() {
        if (!this.userForm.valid) {
            this.invalid = true;
            return;
        }
        console.log(this.user)
        this.userService.create(this.user).subscribe(
            data => {
                console.log(data)
                this.router.navigate(['/login'])
            },
                    error => {
                        this.error = true
            }
            );
    }


}
