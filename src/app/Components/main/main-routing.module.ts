import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {States} from '../../Constants/States';
import {HomeComponent} from './home/home.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                redirectTo: States.HOME,
                pathMatch: 'full'
            },
            {
                path: States.HOME,
                component: HomeComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class MainRoutingModule {}
