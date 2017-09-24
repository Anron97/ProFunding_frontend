import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './login-component/login.component';
import {RegistrationComponent} from './registration-component/registration.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {GrowlModule, InputTextModule} from "primeng/primeng";
import {EmailConfirmComponent} from "./email-confirm-component/email-confirm.component";
import {LocaleService, TranslationModule, TranslationService} from "angular-l10n";




@NgModule({
    imports: [
        ReactiveFormsModule,
        CommonModule,
        RouterModule,
        InputTextModule,
        GrowlModule,
        TranslationModule.forChild()
    ],
    providers: [],
    declarations: [AuthComponent, LoginComponent, RegistrationComponent, EmailConfirmComponent],
    exports: [AuthComponent]
})
export class AuthModule {
    constructor(public locale: LocaleService, public translation: TranslationService) {
        this.locale.addConfiguration()
            .addLanguages(['en', 'rus'])
            .setCookieExpiration(30)
            .defineLanguage('en');

        this.translation.addConfiguration()
            .addProvider('/src/assets/locale-');
        this.translation.init();
    }
}
