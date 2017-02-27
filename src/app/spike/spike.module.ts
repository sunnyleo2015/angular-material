import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {ShareModule} from '../share/share.module';
import {MdInputModule, MdRadioModule} from '@angular/material';

import {MaterialComponent} from './material/material.component';
import {SpikeComponent} from './spike.component';
import {routing} from './spike-routing.module';
import {CheckboxComponent} from './material/checkbox/checkbox.component';
import {InputComponent} from './material/input/input.component';
import {RadioComponent} from './material/radio/radio.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ShareModule,
    MdInputModule,
    MdRadioModule,
    routing,
  ],
  exports: [
    RouterModule,
    MdInputModule,
    MdRadioModule,
  ],
  declarations: [
    MaterialComponent,
    SpikeComponent,
    CheckboxComponent,
    InputComponent,
    RadioComponent,
  ],
  entryComponents: [SpikeComponent]
})
export class SpikeModule {
}
