import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MainComponent} from './main.component';
import {DraftComponent} from './draft-component/draft.component';


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
