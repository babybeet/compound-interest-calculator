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
import { TooltipModule } from '@teedeez/tdz-tooltip';

import { MarkdownRendererModule } from '@client:common/markdown-renderer';
import { RippleOnHoverModule } from '@client:common/ripple-on-hover';

import { ChipFormFieldComponent } from './chip-form-field/chip-form-field.component';
import { ErrorListComponent } from './error-list/error-list.component';
import { FormComponent } from './form.component';
import { LongTextFormFieldComponent } from './long-text-form-field/long-text-form-field.component';
import { PasswordFormFieldComponent } from './password-form-field/password-form-field.component';
import { SearchBoxFormFieldComponent } from './search-box-form-field/search-box-form-field.component';
import { SelectFormFieldComponent } from './select-form-field/select-form-field.component';
import { ShortTextFormFieldComponent } from './short-text-form-field/short-text-form-field.component';
import { FormFieldComponent } from './form-field/form-field.component';

@NgModule({
  declarations: [
    ShortTextFormFieldComponent,
    PasswordFormFieldComponent,
    SelectFormFieldComponent,
    FormComponent,
    SearchBoxFormFieldComponent,
    ChipFormFieldComponent,
    LongTextFormFieldComponent,
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
    MarkdownRendererModule,
    MatChipsModule,
    MatAutocompleteModule,
    RippleOnHoverModule
  ],
  exports: [
    ShortTextFormFieldComponent,
    PasswordFormFieldComponent,
    SelectFormFieldComponent,
    FormComponent,
    SearchBoxFormFieldComponent,
    ChipFormFieldComponent,
    LongTextFormFieldComponent,
    ReactiveFormsModule
  ]
})
export class FormModule {

}
