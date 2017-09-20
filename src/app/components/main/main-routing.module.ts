import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MainComponent} from './main.component';
import {DraftComponent} from './draft-component/draft.component';
import {ProjectComponent} from "./project-component/project.component";
import {ProfileComponent} from "./profile-component/profile.component";


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: MainComponent,
                children: [
                    {
                        path: '',
                        component: HomeComponent
                    },
                    {
                        path: 'draft',
                        component: DraftComponent
                    },
                    {
                        path: 'project/:id',
                        component: ProjectComponent
                    },
                    {
                        path: 'profile/:id',
                        component: ProfileComponent
                    }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class MainRoutingModule {}
