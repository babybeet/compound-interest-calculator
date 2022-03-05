import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatFormField } from '@angular/material/form-field';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'kun-chip-form-field',
  templateUrl: './chip-form-field.component.html',
  styleUrls: ['./chip-form-field.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'chip-form-field form-field'
  }
})
export class ChipFormFieldComponent implements OnInit {

  @Input()
  control: FormControl;

  @Input()
  autocompleteSource: string[];

  @Input()
  label?: string;

  @Input()
  appearance?: MatFormField['appearance'];

  @Input()
  initialChips?: string[];

  @Input()
  placeholder?: string;

  @Input()
  autofocus?: boolean;

  @Output()
  typing = new EventEmitter<string>();

  readonly _chipTerminationKeyCodes = [ENTER, COMMA];
  readonly _chipInputFormControl = new FormControl('');

  _addedChips: string[];

  ngOnInit() {
    this._chipInputFormControl.valueChanges.pipe(
      untilDestroyed(this),
      debounceTime(250),
      distinctUntilChanged(),
      map(enteredValue => enteredValue.trim())
    )
      .subscribe({
        next: enteredValue => {
          this.typing.emit(enteredValue);
        }
      });
    this._addedChips = this.initialChips || [];
    this.appearance = this.appearance || 'outline';
  }

  _onRemoveChip(chip: string) {
    this._addedChips = this._addedChips.filter(addedChip => chip !== addedChip);
    this._updateFormControlValue();
  }

  private _updateFormControlValue() {
    this.control.setValue(this._addedChips);
    this.control.root.markAsDirty();
    this.control.root.markAsTouched();
  }

  _onAddChip(event: MatChipInputEvent | MatAutocompleteSelectedEvent, chipInput: HTMLInputElement) {
    const selectedChip = 'value' in event ? (event.value || '').trim() : event.option.value as string;
    if (selectedChip.length > 0) {
      this._addedChips = [...this._addedChips, selectedChip];
      this._updateFormControlValue();
      if ('chipInput' in event) {
        event.chipInput.clear();
      }
    }
    this._chipInputFormControl.setValue('');
    chipInput.value = '';
  }

  _onValidateControl() {
    this.control.markAsTouched();
    this._chipInputFormControl.setErrors(this.control.validator(this.control));
  }

  _onClearFormField(input: HTMLInputElement) {
    this._chipInputFormControl.setValue('');
    input.value = '';
  }

}
