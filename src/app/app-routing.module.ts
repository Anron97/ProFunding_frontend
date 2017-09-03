import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {States} from './Constants/States';
import {MainComponent} from './Components/main/main.component';
import {AuthComponent} from './Components/auth/auth.component';



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
    ])],
    exports: [RouterModule]
})
export class AppRoutingModule {}
