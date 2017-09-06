import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {States} from './constants/States';
import {AuthComponent} from './components/auth/auth.component';
import {RegistrationComponent} from './components/auth/registration-component/registration.component';



@NgModule({
    imports: [RouterModule.forRoot([
        {
            path: '',
            loadChildren: './components/main/main.module#MainModule'
        },
        {
            path: States.LOGIN,
            component: AuthComponent
        },
        {
            path: States.REGISTRATION,
            component: RegistrationComponent
        }
    ])],
    exports: [RouterModule]
})
export class AppRoutingModule {}
