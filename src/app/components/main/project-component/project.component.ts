import {Component, Input} from "@angular/core";
import {Project} from "../../../models/project";

@Component({
    selector: 'project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css']
})
export class ProjectComponent {
    @Input() project: Project = new Project();
    constructor() {
        this.project.title = "Сборник рассказов \"Мысли из-под фуражки\"";
        this.project.description = "HOLALA";
        this.project.totalCost = 4000
    }
}
