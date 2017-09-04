import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {States} from './Constants/States';
import {MainComponent} from './Components/main/main.component';
import {AuthComponent} from './Components/auth/auth.component';
import {RegistrationComponent} from './Components/auth/registration-component/registration.component';



@NgModule({
    imports: [RouterModule.forRoot([
        {
            path: '',
            redirectTo: States.HOME,
            pathMatch: 'full'
        },
        {
            path: States.HOME,
            component: MainComponent
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
