import { Directive, HostBinding, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Colors } from '../enums/colors';

@Directive({
  selector: '[color]'
})
export class AppColorDirective implements OnInit, OnChanges {
  @Input() color = '';

  @HostBinding('class') _color!: Colors | string | null;

  constructor() {}

  ngOnInit(): void {
    this._color = this.color ? `color color--${this.color}` : null;
  }

  ngOnChanges(changes: SimpleChanges) {
    this._color = changes['color'].currentValue !== '' ? `color color--${changes['color'].currentValue}` : null;
  }
}
