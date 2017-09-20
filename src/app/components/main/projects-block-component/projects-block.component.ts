import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {Project} from "../../../models/project";
import {ProjectService} from "../../../services/project.service";
import {isUndefined} from "util";
import {type} from "os";

@Component({
    selector: 'projects-block',
    templateUrl: './projects-block.component.html',
    styleUrls: ['./projects-block.component.css']
})
export class ProjectsBlockComponent implements OnInit {
    projects: Project[] = [];
    private isLastPage = false;

    constructor(private projectService: ProjectService,
                private router: Router) {
    }
    ngOnInit() {
        const path = this.router.routerState.snapshot.url;
        this.projectService.getProjectNextPage(path).subscribe(
            data => {
                console.log(data);
                console.log(typeof data);
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
