import {Component, ElementRef, ViewChild} from '@angular/core';
import {Project} from '../../../models/project';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import {FinansalGoal} from '../../../models/finansalGoal';

@Component({
    selector: 'app-draft',
    templateUrl: './draft.component.html',
    styleUrls: ['./draft.component.css'],
})
export class DraftComponent {
    @ViewChild('fileSelect') fileSelect: ElementRef;
    @ViewChild('closeBtn') closeBtn: ElementRef;
    project: Project = new Project();
    goal: FinansalGoal = new FinansalGoal("", "", 0);
    goals: FinansalGoal[] = [];
    content: string;

    uploader: CloudinaryUploader = new CloudinaryUploader(
        new CloudinaryOptions({ cloudName: 'profunding', uploadPreset: 'profunding' })
    );

    constructor() {
        this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
            console.log(item);
            let res: any = JSON.parse(response);
            this.project.image = 'http://res.cloudinary.com/' + this.uploader.cloudName +
                '/image/upload/v1505121387/' + res.public_id + '.jpg';
            return { item, response, status, headers };
        };
    }
    load() {
        console.log('In load!');
        this.fileSelect.nativeElement.click();
    }
    upload() {
        console.log('In upload!');
        this.uploader.uploadAll();
    }
    addGoal() {
        this.goals.push(new FinansalGoal(this.goal.title, this.goal.description, this.goal.cost))
    }
    drop() {
        this.closeBtn.nativeElement.click();
    }
}
