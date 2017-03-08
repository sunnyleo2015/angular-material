import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {ShareModule} from '../share/share.module';
import {
  MdInputModule,
  MdRadioModule,
  MdSelectModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdMenuModule,
  MdSidenavModule,
  MdToolbarModule,
  MdListModule,
} from '@angular/material';

import {MaterialComponent} from './material/material.component';
import {SpikeComponent} from './spike.component';
import {routing} from './spike-routing.module';
import {CheckboxComponent} from './material/checkbox/checkbox.component';
import {InputComponent} from './material/input/input.component';
import {RadioComponent} from './material/radio/radio.component';
import {SelectComponent} from './material/select/select.component';
import {SliderComponent} from './material/slider/slider.component';
import {SlideToggleComponent} from './material/slide-toggle/slide-toggle.component';
import {MeanComponent} from './material/mean/mean.component';
import {SideNavComponent} from './material/side-nav/side-nav.component';
import { ToolbarComponent } from './material/toolbar/toolbar.component';
import { ListComponent } from './material/list/list.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ShareModule,
    MdInputModule,
    MdRadioModule,
    MdSelectModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdMenuModule,
    MdSidenavModule,
    MdToolbarModule,
    MdListModule,
    routing,
  ],
  exports: [
    RouterModule,
    MdInputModule,
    MdRadioModule,
    MdSelectModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdMenuModule,
    MdSidenavModule,
    MdToolbarModule,
    MdListModule,
  ],
  declarations: [
    MaterialComponent,
    SpikeComponent,
    CheckboxComponent,
    InputComponent,
    RadioComponent,
    SelectComponent,
    SliderComponent,
    SlideToggleComponent,
    MeanComponent,
    SideNavComponent,
    ToolbarComponent,
    ListComponent,
  ],
  entryComponents: [SpikeComponent]
})
export class SpikeModule {
}
