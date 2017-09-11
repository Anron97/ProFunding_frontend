import {Component} from '@angular/core';
import {CloudinaryOptions, CloudinaryUploader} from "ng2-cloudinary";
import { Ng2FileDropAcceptedFile, Ng2FileDropRejectedFile }  from 'ng2-file-drop';

@Component({

    selector: 'drag-and-drop',
    templateUrl: './drag-and-drop.component.html',
    styleUrls: ['./drag-and-drop.component.css'],
})
export class DragAndDropComponent {

    private supportedFileTypes: string[] = ['image/png', 'image/jpeg', 'image/gif']

    uploader: CloudinaryUploader = new CloudinaryUploader(
        new CloudinaryOptions({ cloudName: 'profunding', uploadPreset: 'profunding' })
    );
    constructor() {
        this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
            console.log(item);
            let res: any = JSON.parse(response);
            console.log('in uploader - onSuccessItem' + res);
            return { item, response, status, headers };
        };
    }
    public dragFileAccepted(acceptedFile: Ng2FileDropAcceptedFile) {
        this.uploader.uploadAll();
    }

}

