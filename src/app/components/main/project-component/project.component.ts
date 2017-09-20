import {Component, OnInit} from "@angular/core";
import {Project} from "../../../models/project";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute} from "@angular/router";
import {ProjectService} from "../../../services/project.service";
import {DateService} from "../../../services/date.service";

@Component({
    selector: 'project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
    private id: number;
    private project: Project;
    private completionDate: String;
    private subscription: Subscription;
    private myProject = false;

    constructor(private activateRoute: ActivatedRoute,
                private projectService: ProjectService,
                private dateService: DateService) {
        this.subscription = activateRoute.params.subscribe(params => this.id = +params['id']);
    }

    ngOnInit(): void {
        if (this.id === 0) {
            this.project = this.projectService.getDraft();
            this.myProject = true;
        }
        this.project = this.projectService.verifyProject(this.project);
        this.completionDate = this.dateService.formatDate(this.project.completionDate)
    }

}
