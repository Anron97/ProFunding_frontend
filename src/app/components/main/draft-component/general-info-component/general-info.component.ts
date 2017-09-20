import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Project} from "../../../../models/project";
import {FinancialGoal} from "../../../../models/financialGoal";
import {CloudinaryOptions, CloudinaryUploader} from "ng2-cloudinary";
import {DateService} from "../../../../services/date.service";

@Component({
    selector: 'general-info',
    templateUrl: './general-info.component.html',
    styleUrls: ['./general-info.component.css']
})
export class GeneralInfoComponent implements OnInit {
    @Input() project: Project;
    @Input() invalid: boolean;
    @ViewChild('fileSelect') fileSelect: ElementRef;
    @ViewChild('closeBtn') closeBtn: ElementRef;
    projectForm: FormGroup;
    financialGoalForm: FormGroup;
    timeNow = new Date();


    public errorMessages = {
        'addTag': 'Your tag can have max 25 symbols',
    };

    public validators = [this.addTag];

    uploader: CloudinaryUploader = new CloudinaryUploader(
        new CloudinaryOptions({cloudName: 'profunding', uploadPreset: 'profunding'})
    );

    constructor(private fb: FormBuilder,
                private dateService: DateService) {
        this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
            let res: any = JSON.parse(response);
            this.project.image = 'http://res.cloudinary.com/' + this.uploader.cloudName +
                '/image/upload/w_800,h_450,c_crop/v1505121387/' + res.public_id + '.jpg';
            return {item, response, status, headers};
        };
    }

    ngOnInit(): void {
        this.projectForm = this.fb.group({
            'title': [this.project.title, Validators.required],
            'description': [this.project.description, Validators.required]
        });
        this.financialGoalForm = this.fb.group({
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
        this.fileSelect.nativeElement.click();
    }

    upload() {
        this.uploader.uploadAll();
        this.closeBtn.nativeElement.click();
    }

    drop() {
        this.closeBtn.nativeElement.click();
    }

    addGoal(form: FormGroup) {
        if (!form.valid) return;
        let goal: FinancialGoal = form.value;
        this.project.financialGoals.push(goal);
        this.project.totalCost += goal.cost;
        form.controls['title'].setValue("");
        form.controls['cost'].setValue("");
    }
    setDate() {
        console.log(this.project.completionDate)
        this.project.leftDays = this.dateService.leftDate(this.project.completionDate)
    }
}
