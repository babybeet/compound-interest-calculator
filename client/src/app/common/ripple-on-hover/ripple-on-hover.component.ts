import { Component, HostListener, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatRipple } from '@angular/material/core';

@Component({
  selector: 'kun-ripple-on-hover',
  templateUrl: './ripple-on-hover.component.html',
  styleUrls: ['./ripple-on-hover.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'ripple-on-hover'
  }
})
export class RippleOnHoverComponent {

  @Input()
  color: string;

  @ViewChild(MatRipple, { static: true, read: MatRipple })
  private _matRipple: MatRipple;

  @HostListener('mouseover')
  _showRipple() {
    this._matRipple.launch({
      centered: true,
      color: this.color || 'rgba(150, 150, 150)',
      persistent: true
    });
  }

  @HostListener('mouseout')
  _hideRipple() {
    this._matRipple.fadeOutAll();
  }

}
