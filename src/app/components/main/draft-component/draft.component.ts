import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Project} from '../../../models/project';
import {FinancialGoal} from "../../../models/financialGoal";
import {ProjectService} from "../../../services/project.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {Subscription} from "rxjs/Subscription";
import {Message} from 'primeng/components/common/api';
import {User} from "../../../models/user";
import {Language} from "angular-l10n";


@Component({
    selector: 'app-draft',
    templateUrl: './draft.component.html',
    styleUrls: ['./draft.component.css'],
})
export class DraftComponent implements OnInit, OnDestroy {
    @Language() lang;
    @ViewChild('begin') begin: ElementRef;
    private project: Project;
    private invalid = false;
    private editProject;
    private currentUser: User;
    private subscription: Subscription;
    private msgs: Message[] = [];

    constructor(private projectService: ProjectService,
                private router: Router,
                private userService: UserService,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.userService.currentUser.subscribe(user => this.currentUser = user);
        this.subscription = this.activatedRoute
            .queryParams
            .subscribe(params => {
                let edit = params['edit']
                if (edit === 'false') this.editProject = false;
                if (edit === 'true') this.editProject = true;
            })
        if (this.editProject) {
            this.project = this.projectService.getEditProject();
        } else {
            this.project = this.projectService.getDraft();
        }

    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    deleteGoal(goal: FinancialGoal) {
        for (let i = 0; i < this.project.financialGoals.length; i++) {
            if (this.project.financialGoals[i].title === goal.title && this.project.financialGoals[i].cost === goal.cost) {
                this.project.totalCost -= goal.cost;
                this.project.financialGoals.splice(i, 1);
            }
        }
    }

    save() {
        if (!this.editProject) {
            this.projectService.saveDraft(this.project);
        } else {
            this.projectService.updateProject(this.project);
        }
        this.msgs = [];
        this.msgs.push({severity: 'success', summary: 'Success', detail: 'Saved success'})
    }

    removeDraft() {
        this.projectService.removeDraft();
    }

    send() {
        if (!this.projectService.isValid(this.project)) {
            this.invalid = true;
            this.save();
            this.begin.nativeElement.click();
        } else {
            this.projectService.create(this.project).subscribe(
                data => {
                    this.userService.addProjectToCurrentUser(this.project);
                    this.msgs = [];
                    this.msgs.push({severity: 'success', summary: 'Success', detail: 'You project success published'})
                },
                error => console.log(error)
            );
        }
    }

    preview() {
        console.log("Save: ");
        if (!this.editProject) {
            this.save();
            this.router.navigate(['/project/0'])
        } else {
            this.router.navigate(['/project/' + this.project.id])
        }
    }

}
