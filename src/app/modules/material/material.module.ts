import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  exports: [
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
