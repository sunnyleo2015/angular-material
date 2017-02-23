import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShareModule} from '../share/share.module';
import {SpikeModule} from  '../spike/spike.module';
import {AppComponent} from "./app.component";
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  imports: [
    CommonModule,
    SpikeModule,
    ShareModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    NavbarComponent,
  ],
  exports: [
    AppComponent,
  ]
})
export class CoreModule {
}
