import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Project} from '../../../models/project';
import {FinancialGoal} from "../../../models/financialGoal";
import {ProjectService} from "../../../services/project.service";
import {Router} from "@angular/router";
import {UserService} from "../../../services/user.service";


@Component({
    selector: 'app-draft',
    templateUrl: './draft.component.html',
    styleUrls: ['./draft.component.css'],
})
export class DraftComponent implements OnInit {

    @ViewChild('begin') begin: ElementRef;
    private project: Project;
    private invalid = false;
    private editProject = true;

    constructor(private projectService: ProjectService,
                private router: Router,
                private userService: UserService) {
    }

    ngOnInit(): void {
        this.project = this.projectService.getEditProject();
        if (!this.project) {
            this.project = this.projectService.getDraft();
            this.editProject = false;
        }
    }

    deleteGoal(goal: FinancialGoal) {
        for (let i = 0; i < this.project.financialGoals.length; i++) {
            if (this.project.financialGoals[i].title === goal.title && this.project.financialGoals[i].cost === goal.cost) {
                this.project.totalCost -= goal.cost;
                this.project.financialGoals.splice(i, 1);
            }
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
                    this.userService.addProjectToCurrentUser(this.project);
                },
                error => console.log(error)
            );
        }
    }

    preview() {
        console.log("Save: ");
        if (!this.editProject) {
            this.saveDraft();
            this.router.navigate(['/project/0'])
        }

    }
}
