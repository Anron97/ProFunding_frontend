import {Component, ElementRef, ViewChild} from '@angular/core';
import {Project} from '../../../models/project';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import {FinansalGoal} from '../../../models/finansalGoal';
import {FormControl} from "@angular/forms";

@Component({
    selector: 'app-draft',
    templateUrl: './draft.component.html',
    styleUrls: ['./draft.component.css'],
})
export class DraftComponent {
    @ViewChild('fileSelect') fileSelect: ElementRef;
    @ViewChild('closeBtn') closeBtn: ElementRef;
    project: Project = new Project();
    goals: FinansalGoal[] = [];
    content: string;
    tags: any[] = [];

    uploader: CloudinaryUploader = new CloudinaryUploader(
        new CloudinaryOptions({ cloudName: 'profunding', uploadPreset: 'profunding' })
    );

    public errorMessages = {
        'addTag': 'Your tag can have max 25 symbols',
    };

    public validators = [this.addTag];

    private addTag(control: FormControl) {
        if (control.value.length > 25) {
            return {
                'addTag': true
            };
        }
        return null;
    }

    constructor() {
        this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
            console.log(item);
            let res: any = JSON.parse(response);
            this.project.image = 'http://res.cloudinary.com/' + this.uploader.cloudName +
                '/image/upload/w_800,h_450,c_crop/v1505121387/' + res.public_id + '.jpg';
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
    drop() {
        this.closeBtn.nativeElement.click();
    }
}
