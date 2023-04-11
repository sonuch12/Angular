import { style } from '@angular/animations';
import { Directive, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHostbinding]',
})
export class HostbindingDirective {
  constructor(private element: ElementRef, private render: Renderer2) {}
  @HostBinding('style.color') str: string = 'red';
}
