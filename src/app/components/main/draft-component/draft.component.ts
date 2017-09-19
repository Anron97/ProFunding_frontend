import {Component, ElementRef, ViewChild} from '@angular/core';
import {Project} from '../../../models/project';
import {FinancialGoal} from "../../../models/financialGoal";
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
        console.log(this.project)
    }

    deleteGoal(goal: FinancialGoal) {
        for (let i = 0; i < this.project.financialGoals.length; i++) {
            if (this.project.financialGoals[i].title === goal.title && this.project.financialGoals[i].cost === goal.cost)
                this.project.financialGoals.splice(i, 1);
        }
    }

    saveDraft() {
        console.log(this.project);
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
