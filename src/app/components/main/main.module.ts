import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './footer-component/footer.component';
import {HeaderComponent} from './header-component/header.component';
import {MainRoutingModule} from './main-routing.module';
import {TinymceModule} from 'angular2-tinymce';
import {DraftComponent} from './draft-component/draft.component';
import {InputTextModule} from 'primeng/primeng';
import {PreviewComponent} from './preview-component/preview.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Ng2CloudinaryModule} from 'ng2-cloudinary';
import { FileUploadModule } from 'ng2-file-upload';
import {CalendarModule} from 'primeng/primeng';
import { Ng2FileDropModule }  from 'ng2-file-drop';
import {DragAndDropComponent} from "./darg-and-drop-component/drag-and-drop.component";

@NgModule({
    imports: [
        CommonModule,
        MainRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        TinymceModule.withConfig({
            menubar: false,
            skin_url: 'assets/tinymce/skins/lightgray',
            relative_urls : true,
            document_base_url : 'http://localhost:8080/src/'
        }),
        InputTextModule,
        Ng2CloudinaryModule,
        FileUploadModule,
        CalendarModule,
        Ng2FileDropModule
    ],
    providers: [],
    declarations: [
        MainComponent,
        HomeComponent,
        FooterComponent,
        HeaderComponent,
        DraftComponent,
        PreviewComponent,
        DragAndDropComponent
    ],
    exports: [MainComponent]
})
export class MainModule {
}
