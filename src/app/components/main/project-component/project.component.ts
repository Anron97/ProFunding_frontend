import {Component, Input} from "@angular/core";
import {Project} from "../../../models/project";
import {CLOUD_NAME} from "../../../constants/API";

@Component({
    selector: 'project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css']
})
export class ProjectComponent {
    @Input() project: Project = new Project();
    CLOUD_NAME = CLOUD_NAME;
    constructor() {
        this.project.title = "Сборник рассказов \"Мысли из-под фуражки\"";
        this.project.description = "HOLALA";
        this.project.totalCost = 4000
    }
}
