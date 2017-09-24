import {Component} from '@angular/core';
import {Language} from "angular-l10n";

@Component({
    selector: 'app-email-confirm',
    templateUrl: './email-confirm.component.html',
    styleUrls: ['./email-confirm.component.css'],
})
export class EmailConfirmComponent {
    @Language() lang;
}
