import {Component, OnInit} from '@angular/core';
import {Project} from "../../../models/project";
import {ProjectService} from "../../../services/project.service";
import {TagsService} from "../../../services/tags.service";
import {error} from "util";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

    tags: any[]
    successProjects: Project[];
    newProjects: Project[];

    constructor(private projectService: ProjectService,
                private tagService: TagsService) {
        projectService.getMainPageContent().subscribe(
            data => {
                console.log(data);
                this.newProjects = data.newProjects;
                this.successProjects = data.successProjects;
            }
        );
    }

    ngOnInit(): void {
        this.tagService.getAllTags().subscribe(
            data => this.tags = data,
            error => console.log(error)
        )
    }


}
