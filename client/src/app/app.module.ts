import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BoxModule } from '@client:common/box';
import { FormModule } from '@client:common/form';
import { RippleOnHoverModule } from '@client:common/ripple-on-hover';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormModule,
    MatButtonModule,
    ReactiveFormsModule,
    RippleOnHoverModule,
    BoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
