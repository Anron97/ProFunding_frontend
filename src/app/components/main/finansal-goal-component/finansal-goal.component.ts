import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FinancialGoal} from "../../../models/financialGoal";

@Component({
    selector: 'finansal-goal',
    templateUrl: './finansal-goal.component.html',
    styleUrls: ['./finansal-goal.component.css']
})
export class FinansalGoalComponent {
    @Input() finansalGoal: FinancialGoal;
    @Input() editable: Boolean;
    @Output() removeFinansalGoal = new EventEmitter<FinancialGoal>()

    deleteGoal() {
        this.removeFinansalGoal.emit(this.finansalGoal);
    }

}
