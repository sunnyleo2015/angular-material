import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {ShareModule} from '../share/share.module';

import {MaterialComponent} from './material/material.component';
import {SpikeComponent} from './spike.component';
import {routing} from './spike-routing.module';
import {CheckboxComponent} from './material/checkbox/checkbox.component';
import {InputComponent} from './material/input/input.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ShareModule,
    routing,
  ],
  exports: [
    RouterModule,
  ],
  declarations: [
    MaterialComponent,
    SpikeComponent,
    CheckboxComponent,
    InputComponent],
  entryComponents: [SpikeComponent]
})
export class SpikeModule {
}
