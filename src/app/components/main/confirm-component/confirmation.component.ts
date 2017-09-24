import { Component } from '@angular/core';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import { Ng2FileDropAcceptedFile, Ng2FileDropRejectedFile } from 'ng2-file-drop';
import { Router } from '@angular/router';
import {User} from "../../../models/user";
import {UserService} from "../../../services/user.service";
import {Language} from "angular-l10n";

@Component({
    selector: 'confirmation-component',
    templateUrl: './confirmation.component.html',
    styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {
    @Language() lang;
    public scanImage: string;
    public successUpload = false;
    public user: User;
    public supportedFileTypes: string[] = ['image/png', 'image/jpeg', 'image/gif']

    uploader: CloudinaryUploader = new CloudinaryUploader(
        new CloudinaryOptions({ cloudName: 'profunding', uploadPreset: 'profunding' })
    );
    constructor(private userService: UserService,
                private router: Router) {
        this.userService.currentUser.subscribe(user => this.user = user)

        this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
            let res: any = JSON.parse(response);
            this.scanImage = 'http://res.cloudinary.com/' + this.uploader.cloudName +
                '/image/upload/w_800,h_450/v1505121387/' + res.public_id + '.jpg';
            this.successUpload = true;
            return { item, response, status, headers };
        };
    }
    public dragFileAccepted(acceptedFile: Ng2FileDropAcceptedFile) {
        this.uploader.uploadAll();
    }

    public sendToServer() {

    }

    public declineSending() {
        this.successUpload = false;
        this.scanImage = '';
    }
}
