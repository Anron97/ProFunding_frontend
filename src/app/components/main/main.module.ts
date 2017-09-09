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
        InputTextModule
    ],
    providers: [],
    declarations: [
        MainComponent,
        HomeComponent,
        FooterComponent,
        HeaderComponent,
        DraftComponent,
        PreviewComponent
    ],
    exports: [MainComponent]
})
export class MainModule {
}
