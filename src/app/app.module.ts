import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AuthModule} from './components/auth/auth.module';
import {AppRoutingModule} from './app-routing.module';
import {UserService} from './services/user.service';
import {AuthenticationService} from './services/authentication.service';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LocaleService, TranslationModule, TranslationService} from "angular-l10n";
import {AdminGuard} from "./guards/admin.guard";
import {ProofedUserGuard} from "./guards/proofedUser.guard";
import {NoProofedUserGuard} from "./guards/noProofedUser.guard";


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AuthModule,
        HttpModule,
        TranslationModule.forRoot(),
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        UserService,
        AuthenticationService,
        AdminGuard,
        ProofedUserGuard,
        NoProofedUserGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(public locale: LocaleService, public translation: TranslationService) {
        this.locale.addConfiguration()
            .addLanguages(['en', 'rus'])
            .setCookieExpiration(30);
        if (localStorage && localStorage.getItem('language')) {
            this.locale.setCurrentLanguage(localStorage.getItem('language'));
        }


        this.translation.addConfiguration()
            .addProvider('/src/assets/locale-');
        this.translation.init();
    }
}
