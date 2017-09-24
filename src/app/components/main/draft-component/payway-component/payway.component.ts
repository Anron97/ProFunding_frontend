import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../../../models/project";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Payment} from "../../../../models/payment";
import {Language} from "angular-l10n";


@Component({
    selector: 'payway-component',
    templateUrl: './payway.component.html',
    styleUrls: ['./payway.component.css'],
})
export class PayWayComponent implements OnInit {
    @Language() lang;
    @Input() project: Project;
    checking = false;
    paywayForm: FormGroup;
    payment: Payment = new Payment();

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.paywayForm = this.fb.group({
            'cardNumber': [this.payment.cardNumber, Validators.required],
            'expirationDate': [this.payment.expirationDate, Validators.required],
            'cvCode': [this.payment.cvCode, Validators.required],
            'owner': [this.payment.owner, Validators.required]
        });
    }

    public checkCard() {
        if (this.paywayForm.valid) {
            this.payment = this.paywayForm.value;
            console.log(this.payment);
            this.checking = true;
        }
    }
}
