import {Component} from '@angular/core';
import {Project} from '../../../models/project';

@Component({
    selector: 'app-draft',
    templateUrl: './draft.component.html',
    styleUrls: ['./draft.component.css'],
})
export class DraftComponent{
    project: Project = new Project();
}
