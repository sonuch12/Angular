import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent {
  str: any = '';
  @ContentChild('access') var!: ElementRef;
  onclick() {
    this.str = this.var.nativeElement.textContent;
  }
}
