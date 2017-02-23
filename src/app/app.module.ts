import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing} from './app-routing.module';



import { AppComponent } from './core/app.component';
import { CoreModule } from './core/core.module';
import { ShareComponent } from './share/share.component';


@NgModule({
  declarations: [
  ShareComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    routing,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
