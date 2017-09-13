import {Component, Input} from '@angular/core';
import {FinansalGoal} from "../../../models/finansalGoal";

@Component({
    selector: 'finansal-goal',
    templateUrl: './finansal-goal.component.html',
    styleUrls: ['./finansal-goal.component.css']
})
export class FinansalGoalComponent {
    @Input() finansalGoal: FinansalGoal;
}
