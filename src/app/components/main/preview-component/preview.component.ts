import {Component, Input} from '@angular/core';
import {Project} from '../../../models/project';
import {Language} from "angular-l10n";



@Component({
    selector: 'preview',
    templateUrl: './preview.component.html',
    styleUrls: ['./preview.component.css']
})
export class PreviewComponent {
    @Language() lang;
    @Input() project: Project;

}

