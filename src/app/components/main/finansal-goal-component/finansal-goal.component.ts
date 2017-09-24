import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FinancialGoal} from "../../../models/financialGoal";
import {Language} from "angular-l10n";

@Component({
    selector: 'finansal-goal',
    templateUrl: './finansal-goal.component.html',
    styleUrls: ['./finansal-goal.component.css']
})
export class FinansalGoalComponent {
    @Language() lang;
    @Input() finansalGoal: FinancialGoal;
    @Input() editable: Boolean;
    @Output() removeFinansalGoal = new EventEmitter<FinancialGoal>()

    deleteGoal() {
        this.removeFinansalGoal.emit(this.finansalGoal);
    }

}
