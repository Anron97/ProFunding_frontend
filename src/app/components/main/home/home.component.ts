import {Component} from '@angular/core';
import {Project} from "../../../models/project";
import {ProjectService} from "../../../services/project.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    successProjects: Project[];
    newProjects: Project[];

    constructor(private projectService: ProjectService) {
        projectService.getMainPageContent().subscribe(
            data => {
                this.newProjects = data.newProjects;
                this.successProjects = data.successProjects;
            }
        );
    }


}
