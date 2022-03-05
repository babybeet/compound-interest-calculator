import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'kun-search-box-form-field',
  templateUrl: './search-box-form-field.component.html',
  styleUrls: ['./search-box-form-field.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'search-box-form-field'
  }
})
export class SearchBoxFormFieldComponent implements OnInit, OnDestroy {

  @Input()
  label: string;

  @Output()
  search = new EventEmitter<string>();

  readonly _form = new FormGroup({
    searchTerm: new FormControl('')
  });

  private _subscription: Subscription;

  ngOnInit() {
    this._subscription = this._form.get('searchTerm').valueChanges.subscribe({
      next: newValue => {
        if (newValue === '') {
          this.search.emit(newValue);
        }
      }
    });
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  _onSearch() {
    this.search.emit(this._form.value.searchTerm.trim());
  }

  _findSearchBoxFormControl() {
    return this._form.get('searchTerm') as FormControl;
  }

}
