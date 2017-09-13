import {Component} from '@angular/core';
import {Project} from "../../../models/project";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    project: Project = new Project();
}
