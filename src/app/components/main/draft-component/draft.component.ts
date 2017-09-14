import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Project} from '../../../models/project';
import {CloudinaryOptions, CloudinaryUploader} from 'ng2-cloudinary';
import {FinansalGoal} from '../../../models/finansalGoal';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-draft',
    templateUrl: './draft.component.html',
    styleUrls: ['./draft.component.css'],
})
export class DraftComponent implements OnInit {
    @ViewChild('fileSelect') fileSelect: ElementRef;
    @ViewChild('closeBtn') closeBtn: ElementRef;
    projectForm: FormGroup;
    finansalGoalForm: FormGroup;
    project: Project = new Project();
    goals: FinansalGoal[] = [];
    invalidDate = false;
    invalidGoals = false;
    content: string;
    tags: any[] = [];

    public errorMessages = {
        'addTag': 'Your tag can have max 25 symbols',
    };

    public validators = [this.addTag];

    uploader: CloudinaryUploader = new CloudinaryUploader(
        new CloudinaryOptions({cloudName: 'profunding', uploadPreset: 'profunding'})
    );

    constructor(private fb: FormBuilder) {
        this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
            console.log(item);
            let res: any = JSON.parse(response);
            this.project.image = 'http://res.cloudinary.com/' + this.uploader.cloudName +
                '/image/upload/w_800,h_450,c_crop/v1505121387/' + res.public_id + '.jpg';
            return {item, response, status, headers};
        };
    }

    ngOnInit(): void {
        this.projectForm = this.fb.group({
            'title': [this.project.title, Validators.required],
            'description': [this.project.description, Validators.required],
            'date': [this.project.completionDate, Validators.required]
        });
        this.finansalGoalForm = this.fb.group({
            'title': ['', Validators.required],
            'cost': ['', Validators.required]
        });
    }

    private addTag(control: FormControl) {
        if (control.value.length > 25) {
            return {
                'addTag': true
            };
        }
        return null;
    }

    load() {
        console.log('In load!');
        this.fileSelect.nativeElement.click();
    }

    upload() {
        console.log('In upload!');
        this.uploader.uploadAll();
    }

    drop() {
        this.closeBtn.nativeElement.click();
    }

    addGoal(form: FormGroup) {
        if (!form.valid) return;
        let goal: FinansalGoal = form.value;
        this.goals.push(goal);
        form.controls['title'].setValue("");
        form.controls['cost'].setValue("");
    }

    deleteGoal(goal: FinansalGoal) {
        for (let i = 0; i < this.goals.length; i++) {
            if (this.goals[i].title === goal.title && this.goals[i].cost === goal.cost)
                this.goals.splice(i, 1);
        }
    }
}
