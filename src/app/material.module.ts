import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// For components using angular-animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Imports of used components
import {
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule
} from '@angular/material';

import { FlexLayoutModule } from "@angular/flex-layout";


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule

  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  declarations: []
})
export class MaterialModule { }
