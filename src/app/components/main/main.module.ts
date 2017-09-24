import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {HomeComponent} from './home-component/home.component';
import {FooterComponent} from './footer-component/footer.component';
import {HeaderComponent} from './header-component/header.component';
import {MainRoutingModule} from './main-routing.module';
import {DraftComponent} from './draft-component/draft.component';
import {GrowlModule, InputTextModule} from 'primeng/primeng';
import {PreviewComponent} from './preview-component/preview.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Ng2CloudinaryModule} from 'ng2-cloudinary';
import { FileUploadModule } from 'ng2-file-upload';
import {CalendarModule} from 'primeng/primeng';
import { Ng2FileDropModule }  from 'ng2-file-drop';
import {DragAndDropComponent} from "./darg-and-drop-component/drag-and-drop.component";
import {EditorModule} from 'primeng/primeng';
import {ProjectComponent} from "./project-component/project.component";
import { TagInputModule } from 'ng2-tag-input';
import {FinansalGoalComponent} from "./finansal-goal-component/finansal-goal.component";
import {GeneralInfoComponent} from "./draft-component/general-info-component/general-info.component";
import {DescriptionComponent} from "./draft-component/description-component/description.component";
import {ProfileComponent} from "./profile-component/profile.component";
import {ProjectsBlockComponent} from "./projects-block-component/projects-block.component";
import {RatingModule} from "ng2-rating";
import {ProjectService} from "../../services/project.service";
import {DateService} from "../../services/date.service";
import {TagsService} from "../../services/tags.service";
import {CommentComponent} from "./comment-component/comment.component";
import {PayWayComponent} from "./draft-component/payway-component/payway.component";
import {CommentService} from "../../services/comment.service";
import {RatingService} from "../../services/rating.service";
import {AdminModule} from "./admin/admin.module";
import {SearchComponent} from "./search-component/search.component";




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
        EditorModule,
        TagInputModule,
        RatingModule,
        AdminModule,
        GrowlModule
    ],
    providers: [
        ProjectService,
        DateService,
        TagsService,
        CommentService,
        RatingService
    ],
    declarations: [
        MainComponent,
        HomeComponent,
        FooterComponent,
        HeaderComponent,
        DraftComponent,
        PreviewComponent,
        DragAndDropComponent,
        ProjectComponent,
        FinansalGoalComponent,
        GeneralInfoComponent,
        DescriptionComponent,
        ProfileComponent,
        ProjectsBlockComponent,
        CommentComponent,
        PayWayComponent,
        SearchComponent
    ],
    exports: [MainComponent]
})
export class MainModule {
}
