import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './login-component/login.component';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [],
    declarations: [AuthComponent, LoginComponent],
    exports: [AuthComponent]
})
export class AuthModule {
}
