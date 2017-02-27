import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {ShareModule} from '../share/share.module';
import {MdInputModule, MdRadioModule, MdSelectModule} from '@angular/material';

import {MaterialComponent} from './material/material.component';
import {SpikeComponent} from './spike.component';
import {routing} from './spike-routing.module';
import {CheckboxComponent} from './material/checkbox/checkbox.component';
import {InputComponent} from './material/input/input.component';
import {RadioComponent} from './material/radio/radio.component';
import { SelectComponent } from './material/select/select.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ShareModule,
    MdInputModule,
    MdRadioModule,
    MdSelectModule,
    routing,
  ],
  exports: [
    RouterModule,
    MdInputModule,
    MdRadioModule,
    MdSelectModule,
  ],
  declarations: [
    MaterialComponent,
    SpikeComponent,
    CheckboxComponent,
    InputComponent,
    RadioComponent,
    SelectComponent,
  ],
  entryComponents: [SpikeComponent]
})
export class SpikeModule {
}
