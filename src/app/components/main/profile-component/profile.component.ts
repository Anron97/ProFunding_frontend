import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CloudinaryOptions, CloudinaryUploader} from 'ng2-cloudinary';
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
    private user: User;
    private subscription: Subscription;
    private myProfile = false;
    uploader: CloudinaryUploader = new CloudinaryUploader(
        new CloudinaryOptions({cloudName: 'profunding', uploadPreset: 'profunding'})
    );


    constructor(private activateRoute: ActivatedRoute,
                private userService: UserService) {
        this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);

        let currentUser = this.userService.getCurrentUser();
        if (currentUser && currentUser.id === +this.id) {
            this.userService.currentUser.subscribe(user => this.user = user);
            this.myProfile = true;
        } else {
            this.userService.getUserById(this.id).subscribe(
                data => this.user = data,
                error => console.log(error)
            )
        }
        this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
            let res: any = JSON.parse(response);
            this.user.image = "https://res.cloudinary.com/" + this.uploader.cloudName
                + "/image/upload/w_250,h_250,c_thumb,r_max/v1505121387/"
                + res.public_id + ".jpg";
            this.userService.updateProfile(this.user);
            this.userService.saveUser(this.user);
            this.userService.setUser(this.user);
            return {item, response, status, headers};
        };
    }

    onChange() {
        this.uploader.uploadAll();
    }

}
