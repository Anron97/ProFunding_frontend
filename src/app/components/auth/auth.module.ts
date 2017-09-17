import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './login-component/login.component';
import {RegistrationComponent} from './registration-component/registration.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {InputTextModule} from "primeng/primeng";


@NgModule({
    imports: [
        ReactiveFormsModule,
        CommonModule,
        RouterModule,
        InputTextModule
    ],
    providers: [],
    declarations: [AuthComponent, LoginComponent, RegistrationComponent],
    exports: [AuthComponent]
})
export class AuthModule {
}
