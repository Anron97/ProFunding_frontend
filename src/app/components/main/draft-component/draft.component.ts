import {Component, ElementRef, ViewChild} from '@angular/core';
import {Project} from '../../../models/project';
import {FinansalGoal} from "../../../models/finansalGoal";
import {ProjectService} from "../../../services/project.service";
import {Router} from "@angular/router";


@Component({
    selector: 'app-draft',
    templateUrl: './draft.component.html',
    styleUrls: ['./draft.component.css'],
})
export class DraftComponent {
    @ViewChild('begin') begin: ElementRef;
    project: Project;
    invalid = false;

    constructor(private projectService: ProjectService) {
        this.project = projectService.getDraft();
    }

    deleteGoal(goal: FinansalGoal) {
        for (let i = 0; i < this.project.finansalGoals.length; i++) {
            if (this.project.finansalGoals[i].title === goal.title && this.project.finansalGoals[i].cost === goal.cost)
                this.project.finansalGoals.splice(i, 1);
        }
    }

    saveDraft() {
        this.projectService.saveDraft(this.project);
    }

    removeDraft() {
        this.projectService.removeDraft();
    }

    send() {
        if (!this.projectService.isValid(this.project)) {
            this.invalid = true;
            this.saveDraft();
            this.begin.nativeElement.click();
        } else {
            this.projectService.create(this.project).subscribe(
                data => {
                    console.log("OK");
                    console.log(data);
                },
                error => console.log(error)
            );
        }

    }
}
