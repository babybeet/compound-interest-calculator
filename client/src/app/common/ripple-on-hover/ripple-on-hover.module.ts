import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';

import { RippleOnHoverComponent } from './ripple-on-hover.component';

@NgModule({
  declarations: [
    RippleOnHoverComponent
  ],
  imports: [
    CommonModule,
    MatRippleModule
  ],
  exports: [
    RippleOnHoverComponent
  ]
})
export class RippleOnHoverModule {

}
