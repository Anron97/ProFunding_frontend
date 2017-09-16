import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import {CloudinaryOptions, CloudinaryUploader, CloudinaryImageComponent} from 'ng2-cloudinary';
import {Subscription} from 'rxjs/Subscription';
import {User} from "../../../models/user";
import {UserService} from "../../../services/user.service";


@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
    private id: number;
    private user: User = new User();
    private subscription: Subscription;
    uploader: CloudinaryUploader = new CloudinaryUploader(
        new CloudinaryOptions({cloudName: 'profunding', uploadPreset: 'profunding'})
    );


    constructor(private activateRoute: ActivatedRoute,
                private userService: UserService) {
        this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);
        let currentUser = userService.getCurrentUser();
        if (currentUser && currentUser.id === this.id) {
            this.user = currentUser;
        }
        this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
            let res: any = JSON.parse(response);
            this.user.image = "https://res.cloudinary.com/" + this.uploader.cloudName
                + "/image/upload/w_250,h_250,c_thumb,r_max/v1505121387/"
                + res.public_id + ".jpg";
            return {item, response, status, headers};
        };
    }

    onChange() {
        this.uploader.uploadAll();
    }

}
