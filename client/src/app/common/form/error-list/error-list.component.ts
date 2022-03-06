import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'kun-error-list',
  templateUrl: './error-list.component.html',
  styleUrls: ['./error-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ErrorListComponent implements OnInit {

  @Input()
  control: FormControl;

  @Input()
  label?: string;

  ngOnInit() {
    if (!this.label) {
      this.label = 'This field';
    }
  }

  _getErrors() {
    if (this.control.touched && this.control.errors) {
      return Object.entries(this.control.errors)
        .sort((leftEntry, rightEntry) => leftEntry[0].localeCompare(rightEntry[1]))
        .map(entry => {
          switch (entry[0]) {
            case 'required':
              return `${this.label} is <strong>required</strong>`;
            case 'email':
              return `${this.label} is not valid`;
            case 'min':
              return `${this.label} must be greater than or equal to ${entry[1].min}`;
            case 'max':
              return `${this.label} must be less than or equal to ${entry[1].max}`;
            case 'minLength':
              return `${this.label} must be greater than or equal to ${entry[1].minLength}`;
            case 'maxLength':
              return `${this.label} must be less than or equal to ${entry[1].maxLength}`;
            default:
              return entry[1];
          }
        });
    }
    return [];
  }

}
