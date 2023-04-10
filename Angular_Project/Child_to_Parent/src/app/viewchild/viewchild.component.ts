import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css'],
})
export class ViewchildComponent {
  @ViewChild('inDob') birth!: ElementRef;
  @ViewChild('inAge') age!: ElementRef;
  calculateAge() {
    let birthYear = new Date(this.birth.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();
    let valu = currentYear - birthYear;
    this.age.nativeElement.value = valu;
  }
}
