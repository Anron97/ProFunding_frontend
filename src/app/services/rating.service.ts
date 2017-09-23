import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {UserService} from "./user.service";
import {API_URL} from "../constants/API";

@Injectable()
export class RatingService {

    constructor(private http: Http,
                private userService: UserService) {

    }

    checkEnable(projectId: number) {
        return this.http.get(API_URL + "/rating/check/" + projectId, this.userService.jwt())
            .map((response: Response) => response.json());
    }
}