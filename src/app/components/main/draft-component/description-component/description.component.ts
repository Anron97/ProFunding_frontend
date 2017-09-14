import {Component, Input} from '@angular/core';
import {Project} from "../../../../models/project";


@Component({
    selector: 'description-component',
    templateUrl: './description.component.html',
    styleUrls: ['./description.component.css'],
})
export class DescriptionComponent {
    @Input() project: Project;
    @Input() invalid: boolean;

}
