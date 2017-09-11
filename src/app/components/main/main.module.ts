import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './footer-component/footer.component';
import {HeaderComponent} from './header-component/header.component';
import {MainRoutingModule} from './main-routing.module';
import {DraftComponent} from './draft-component/draft.component';
import {InputTextModule} from 'primeng/primeng';
import {PreviewComponent} from './preview-component/preview.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Ng2CloudinaryModule} from 'ng2-cloudinary';
import { FileUploadModule } from 'ng2-file-upload';
import {CalendarModule} from 'primeng/primeng';
import { Ng2FileDropModule }  from 'ng2-file-drop';
import {DragAndDropComponent} from "./darg-and-drop-component/drag-and-drop.component";
import {EditorModule} from 'primeng/primeng';
import {ProjectComponent} from "./project-component/project.component";

@NgModule({
    imports: [
        CommonModule,
        MainRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        InputTextModule,
        Ng2CloudinaryModule,
        FileUploadModule,
        CalendarModule,
        Ng2FileDropModule,
        EditorModule
    ],
    providers: [],
    declarations: [
        MainComponent,
        HomeComponent,
        FooterComponent,
        HeaderComponent,
        DraftComponent,
        PreviewComponent,
        DragAndDropComponent,
        ProjectComponent
    ],
    exports: [MainComponent]
})
export class MainModule {
}
