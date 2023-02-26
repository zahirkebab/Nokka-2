import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NokkaShellComponent } from './nokka-shell/nokka-shell.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarousellComponent } from './carousell/carousell.component';
import { MaterialModule } from './material-module';

@NgModule({
    declarations: [
        AppComponent,
        NokkaShellComponent,
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NgbModule,
        CarousellComponent,
        MaterialModule

    ]
})
export class AppModule { }
