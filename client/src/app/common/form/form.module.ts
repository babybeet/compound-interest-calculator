import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TooltipModule } from 'angular-simple-tooltip-test';

import { RippleOnHoverModule } from '@client:common/ripple-on-hover';

import { ErrorListComponent } from './error-list/error-list.component';
import { FormComponent } from './form.component';
import { ShortTextFormFieldComponent } from './short-text-form-field/short-text-form-field.component';
import { FormFieldComponent } from './form-field/form-field.component';

@NgModule({
  declarations: [
    ShortTextFormFieldComponent,
    FormComponent,
    ErrorListComponent,
    FormFieldComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    TooltipModule,
    MatSelectModule,
    MatChipsModule,
    MatAutocompleteModule,
    RippleOnHoverModule
  ],
  exports: [
    ShortTextFormFieldComponent,
    FormComponent,
    ReactiveFormsModule
  ]
})
export class FormModule {

}
