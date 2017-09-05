import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AuthModule} from './Components/auth/auth.module';
import {AppRoutingModule} from './app-routing.module';
import {MainModule} from './Components/main/main.module';
import {UserService} from './Services/user.service';
import {AuthenticationService} from './Services/authentication.service';
import {HttpModule} from '@angular/http';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        MainModule,
        AuthModule,
        HttpModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        UserService,
        AuthenticationService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
