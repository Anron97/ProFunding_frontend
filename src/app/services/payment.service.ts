import {Injectable} from "@angular/core";
import {UserService} from "./user.service";
import {Http} from "@angular/http";
import {API_URL} from "../constants/API";

@Injectable()
export class PaymentService {

    constructor(private userService: UserService,
                private http: Http){

    }

    addPayment(userId: number, projectId: number, amount: number) {
        return this.http.post(API_URL + '/payment/add', {userId, projectId, amount}, this.userService.jwt())
            .map(response => response.json());
    }
}