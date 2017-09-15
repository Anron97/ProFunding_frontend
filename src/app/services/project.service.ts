import {Injectable} from '@angular/core';
import {Project} from "../models/project";
import {Http, Response} from "@angular/http";
import {API_URL} from "../constants/API";
import {UserService} from "./user.service";
import {User} from "../models/user";
import 'rxjs/add/operator/map';


@Injectable()
export class ProjectService {

    constructor(private http: Http,
                private userService: UserService) {
    }

    saveDraft(project: Project) {
        localStorage.setItem('draft', JSON.stringify(project));
    }

    getDraft() {
        let project = JSON.parse(localStorage.getItem('draft'));
        return project ? project : new Project();
    }

    removeDraft() {
        if (localStorage.getItem('draft')) {
            localStorage.removeItem('draft');
        }
    }

    isValid(project: Project) {
        let now = new Date();
        if (typeof project.title === "undefined" ||
            project.title === "" ||
            typeof project.description === "undefined" ||
            project.description === "" ||
            project.finansalGoals.length === 0 ||
            project.tags.length === 0 ||
            typeof project.completionDate === "undefined" ||
            project.completionDate < now) {
            return false;
        }
        return true;
    }

    create(project: Project) {
        console.log("request: " + project);
        let currentUser: User = this.userService.getCurrentUser();
        if (currentUser.role === "ROLE_PROOFED_USER" || currentUser.role === "ROLE_ADMIN") {
            project.userId = currentUser.id;
            return this.http.post(API_URL + '/projects/create', {project}, this.userService.jwt())
                .map((response: Response) => response.json());
        }
    }
}
