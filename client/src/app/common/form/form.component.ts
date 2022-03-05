import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'kun-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'form'
  }
})
export class FormComponent {

  @Input()
  form: FormGroup;

  @Input()
  formTitle?: string;

  @Output()
  formSubmit = new EventEmitter<any>();

  @ViewChild(FormGroupDirective)
  private readonly _formGroupDirective: FormGroupDirective;

  resetForm(value: any) {
    this._formGroupDirective.resetForm(value);
  }

  _onSubmit() {
    if (this.form.valid && this.form.dirty) {
      this.formSubmit.emit(this.form.value);
      this.form.markAsPristine();
    }
  }

}
