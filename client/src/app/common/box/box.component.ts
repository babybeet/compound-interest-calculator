import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'kun-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'box'
  }
})
export class BoxComponent {

}
