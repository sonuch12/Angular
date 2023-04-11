import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  constructor(private element: ElementRef, private rendered: Renderer2) {}
  ngOnInit() {
    this.rendered.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'Green'
    );
  }
}
