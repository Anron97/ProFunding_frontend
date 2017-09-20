import {Injectable} from "@angular/core";
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {API_URL} from '../constants/API';
import {Observable} from "rxjs/Observable";

@Injectable()
export class TagsService {

    constructor(private http: Http) {}

    getAllTags(): Observable<any> {
        return this.http.get(API_URL + '/tags/all').map((response: Response) => response.json())
    }
}
