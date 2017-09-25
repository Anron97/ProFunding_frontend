import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home-component/home.component';
import {MainComponent} from './main.component';
import {DraftComponent} from './draft-component/draft.component';
import {ProjectComponent} from "./project-component/project.component";
import {ProfileComponent} from "./profile-component/profile.component";
import {ProjectsBlockComponent} from "./projects-block-component/projects-block.component";
import {AdminComponent} from "./admin/admin.component";
import {ConfirmationComponent} from "./confirm-component/confirmation.component";
import {ProofedUserGuard} from "../../guards/proofedUser.guard";
import {NoProofedUserGuard} from "../../guards/noProofedUser.guard";
import {AdminGuard} from "../../guards/admin.guard";


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
                        component: DraftComponent,
                        canActivate: [ProofedUserGuard]
                    },
                    {
                        path: 'project/:id',
                        component: ProjectComponent,

                    },
                    {
                        path: 'profile/:id',
                        component: ProfileComponent,
                        canActivate: [NoProofedUserGuard]
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
                    },
                    {
                        path: 'admin',
                        component: AdminComponent,
                        canActivate: [AdminGuard]
                    },
                    {
                        path: 'confirmation',
                        component: ConfirmationComponent,
                        canActivate: [NoProofedUserGuard]
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
