import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from "@angular/http";
import { MaterialModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    MaterialModule.forRoot(),
  ],
  exports: [HttpModule, MaterialModule],
  declarations: []
})
export class ShareModule { }
