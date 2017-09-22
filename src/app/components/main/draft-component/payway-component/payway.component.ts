import { Component, Input } from '@angular/core';
import {Project} from "../../../../models/project";



@Component({
    selector: 'payway-component',
    templateUrl: './payway.component.html',
    styleUrls: ['./payway.component.css'],
})
export class PayWayComponent {
    @Input() project: Project;
    checking= false;

    public checkCard() {
        this.checking = true;
    }
}