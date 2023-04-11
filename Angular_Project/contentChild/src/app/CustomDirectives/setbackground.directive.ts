import { Directive, ElementRef ,OnInit} from '@angular/core';

@Directive({
  selector: '[appSetbackground]',
})
export class SetbackgroundDirective implements OnInit {
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.background = 'red';
  }
  ngOnInit(): void {
      
  }
}
