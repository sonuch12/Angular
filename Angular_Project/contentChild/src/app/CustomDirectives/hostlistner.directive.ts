import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostlistner]',
})
export class HostlistnerDirective {
  constructor(private element: ElementRef, private render: Renderer2) {}

  @HostListener('mouseenter') onmouse() {
    this.render.setStyle(this.element.nativeElement, 'margin', '5px 10px');
    this.render.setStyle(
      this.element.nativeElement,
      'border',
      ' red 5px solid'
    );
  }
}
