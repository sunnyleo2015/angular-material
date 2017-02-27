import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from "@angular/http";
import {MaterialModule} from '@angular/material';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    MaterialModule.forRoot(),
    FormsModule,
  ],
  exports: [
    HttpModule,
    MaterialModule,
    FormsModule],
  declarations: []
})
export class ShareModule {
}
