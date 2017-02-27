import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {ShareModule} from '../share/share.module';
import {MdInputModule, MdRadioModule, MdSelectModule, MdSliderModule} from '@angular/material';

import {MaterialComponent} from './material/material.component';
import {SpikeComponent} from './spike.component';
import {routing} from './spike-routing.module';
import {CheckboxComponent} from './material/checkbox/checkbox.component';
import {InputComponent} from './material/input/input.component';
import {RadioComponent} from './material/radio/radio.component';
import { SelectComponent } from './material/select/select.component';
import { SliderComponent } from './material/slider/slider.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ShareModule,
    MdInputModule,
    MdRadioModule,
    MdSelectModule,
    MdSliderModule,
    routing,
  ],
  exports: [
    RouterModule,
    MdInputModule,
    MdRadioModule,
    MdSelectModule,
    MdSliderModule,
  ],
  declarations: [
    MaterialComponent,
    SpikeComponent,
    CheckboxComponent,
    InputComponent,
    RadioComponent,
    SelectComponent,
    SliderComponent,
  ],
  entryComponents: [SpikeComponent]
})
export class SpikeModule {
}
