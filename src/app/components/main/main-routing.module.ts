import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home-component/home.component';
import {MainComponent} from './main.component';
import {DraftComponent} from './draft-component/draft.component';
import {ProjectComponent} from "./project-component/project.component";
import {ProfileComponent} from "./profile-component/profile.component";
import {ProjectsBlockComponent} from "./projects-block-component/projects-block.component";


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
                        component: ProjectComponent,
                        data: {preload: true}
                    },
                    {
                        path: 'profile/:id',
                        component: ProfileComponent,
                        data: {preload: true}
                    },
                    {
                        path: 'projects/:property/:value',
                        component: ProjectsBlockComponent,
                        data: {preload: true}
                    },
                    {
                        path: 'projects/:property',
                        component: ProjectsBlockComponent,
                        data: {preload: true}
                    },
                    {
                        path: 'projects',
                        component: ProjectsBlockComponent,
                        data: {preload: true}
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
