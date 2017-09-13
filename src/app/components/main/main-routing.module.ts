import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MainComponent} from './main.component';
import {DraftComponent} from './draft-component/draft.component';
import {ProjectComponent} from "./project-component/project.component";


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
                        path: 'project',
                        component: ProjectComponent
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
