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
    notConfirmEmail = false;

    constructor(private router: Router,
                private fb: FormBuilder,
                private authService: AuthenticationService) {
    }

    ngOnInit(): void {
        this.buildForm();
        this.userForm.controls['login'].setValue("");
        this.userForm.controls['password'].setValue("");
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
            data => {
                this.router.navigate([''])
            },
                    error => {
                        if (error.status === 401) {
                            this.invalid = false;
                            this.notConfirmEmail = true;
                        }else {
                            this.notConfirmEmail = false;
                            this.invalid = true;
                        }
                    }
        )
    }
}
