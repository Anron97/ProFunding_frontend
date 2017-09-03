import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AuthModule} from './Components/auth/auth.module';
import {AppRoutingModule} from './app-routing.module';
import {MainModule} from './Components/main/main.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        MainModule,
        AuthModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
