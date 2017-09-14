import {Injectable} from '@angular/core';
import {Project} from "../models/project";


@Injectable()
export class ProjectService {
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

}
