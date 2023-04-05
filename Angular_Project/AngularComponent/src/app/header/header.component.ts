import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  slogan: string = 'Welcome to Angular Basic content';
  getFirstSlogan() {
    return 'Angular Class';
  }
  source: string = '/assets/sonu.jpg';
}
