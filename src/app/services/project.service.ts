import {Injectable} from '@angular/core';
import {Project} from "../models/project";
import {Http, Response} from "@angular/http";
import {API_URL} from "../constants/API";
import {UserService} from "./user.service";
import {User} from "../models/user";
import 'rxjs/add/operator/map';
import {DateService} from "./date.service";
import {Observable} from "rxjs/Observable";


@Injectable()
export class ProjectService {

    constructor(private http: Http,
                private userService: UserService,
                private dateService: DateService) {
    }

    saveDraft(project: Project) {
        console.log(project);
        console.log(project.completionDate);
        if (project.completionDate) {
            localStorage.setItem('completionDate', JSON.stringify(project.completionDate))
        }
        localStorage.setItem('draft', JSON.stringify(project));
    }

    getDraft() {
        let completionDate;
        if (localStorage.getItem('completionDate')) {
            completionDate = JSON.parse(localStorage.getItem('completionDate'))
        }
        let project = JSON.parse(localStorage.getItem('draft'));
        if (completionDate && project) {
            project.completionDate = new Date(completionDate);
        }
        return project ? project : new Project();
    }

    removeDraft() {
        if (localStorage.getItem('draft')) {
            localStorage.removeItem('draft');
            localStorage.removeItem('completionDate');
        }
    }

    isValid(project: Project) {
        let now = new Date();
        if (typeof project.title === "undefined" ||
            project.title === "" ||
            typeof project.description === "undefined" ||
            project.description === "" ||
            project.financialGoals.length === 0 ||
            project.tags.length === 0 ||
            typeof project.completionDate === "undefined" ||
            project.completionDate < now) {
            return false;
        }
        return true;
    }

    create(project: Project): Observable<any> {
        console.log("request: ");
        console.log(project);
        let currentUser: User = this.userService.getCurrentUser();
        /*if (currentUser.role === "ROLE_PROOFED_USER" || currentUser.role === "ROLE_ADMIN")*/ {
            project.userId = currentUser.id;
            return this.http.post(API_URL + '/projects/create', JSON.stringify(project), this.userService.jwt())
                .map((response: Response) => response.json());
        }
    }

    getMainPageContent() {
        return this.http.get(API_URL + '/projects/main_page', this.userService.jwt())
            .map((response: Response) => response.json());
    }
    
    getProjectNextPage(property: string, type: string, value: string) {
        console.log(API_URL + '/projects/' + property + type + value);
        return this.http.get(API_URL + '/projects/' + property + type + value)
            .map((response: Response) => response.json());
    }

    verifyProject(project: Project): Project {
        if (!project.title) project.title = "Название проекта";
        if (!project.description) project.description = "Краткое описание проекта";
        if (!project.completionDate) project.completionDate = new Date();

        return project;
    }

}
