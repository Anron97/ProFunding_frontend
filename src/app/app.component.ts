import {Component, OnInit} from '@angular/core';
import {LocaleService, TranslationService} from "angular-l10n";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(public locale: LocaleService, public translation: TranslationService) {
        this.locale.addConfiguration()
            .addLanguages(['en', 'rus'])
            .setCookieExpiration(30)
            .defineLanguage('en');

        this.translation.addConfiguration()
            .addProvider('../assets/locale-');

        this.translation.init();
    }
}

