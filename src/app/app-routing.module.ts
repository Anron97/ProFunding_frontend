import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule} from '@angular/router';
import {States} from './constants/States';
import {AuthComponent} from './components/auth/auth.component';
import {RegistrationComponent} from './components/auth/registration-component/registration.component';
import {EmailConfirmComponent} from "./components/auth/email-confirm-component/email-confirm.component";



@NgModule({
    imports: [RouterModule.forRoot([
        {
            path: '',
            loadChildren: './components/main/main.module#MainModule',
            data: {preload: true}
        },
        {
            path: States.LOGIN,
            component: AuthComponent
        },
        {
            path: States.REGISTRATION,
            component: RegistrationComponent
        },
        {
            path: States.CONFIRM,
            component: EmailConfirmComponent
        },
        {
            path: States.ADMIN,
            loadChildren: './components/admin/admin.module#AdminModule',
            data: {preload: true}
        }
    ],
        {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
