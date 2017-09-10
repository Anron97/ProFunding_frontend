import {Component, ElementRef, ViewChild} from '@angular/core';
import {Project} from '../../../models/project';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';

@Component({
    selector: 'app-draft',
    templateUrl: './draft.component.html',
    styleUrls: ['./draft.component.css'],
})
export class DraftComponent {
    @ViewChild('fileSelect') fileSelect: ElementRef;
    project: Project = new Project();

    uploader: CloudinaryUploader = new CloudinaryUploader(
        new CloudinaryOptions({ cloudName: 'profunding', uploadPreset: 'profunding' })
    );

    constructor() {
        this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
            console.log(item);
            let res: any = JSON.parse(response);
            this.project.image = res.public_id;
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
}
