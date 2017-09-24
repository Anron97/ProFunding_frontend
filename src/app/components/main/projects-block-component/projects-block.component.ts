import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {Project} from "../../../models/project";
import {ProjectService} from "../../../services/project.service";
import {isUndefined} from "util";
import {type} from "os";
import {Language} from "angular-l10n";

@Component({
    selector: 'projects-block',
    templateUrl: './projects-block.component.html',
    styleUrls: ['./projects-block.component.css']
})
export class ProjectsBlockComponent implements OnInit {
    @Language() lang;
    projects: Project[] = [];
    private isLastPage = false;
    private subscription: Subscription;
    private property: string;
    private type: string;
    private value: string;


    constructor(private projectService: ProjectService,
                private router: Router,
                private activateRoute: ActivatedRoute) {
        this.subscription = this.activateRoute.params.subscribe(params => {
            this.property = params['property'];
            this.type = params['type'];
            this.value = params['value'];
            if (this.property === null) {
                this.property = 'all';
            }
            if (this.type) {
                this.type = '/' + this.type;
            }else {
                this.type = ""
            }
            if (this.value) {
                this.value = '/' + this.value;
            }else {
                this.value = ""
            }
        })
    }

    ngOnInit() {
        console.log(this.property);
        console.log(this.type);
        console.log(this.value);
        this.projectService.getProjectNextPage(this.property, this.type, this.value).subscribe(
            data => {
                console.log(data);
                if (data.last && data.last === true) {
                    this.isLastPage = true;
                }
                if (data.page) {
                    this.projects = this.projects.concat(data.page);
                }
            }
        )
    }
}
