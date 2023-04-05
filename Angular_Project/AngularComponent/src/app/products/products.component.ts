import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  pro = [
    { id: 1, name: 'Sam', phNumber: 123456789, details: 'availabe' },
    { id: 2, name: 'Pam', phNumber: 213456789, details: 'availabe' },
    { id: 4, name: 'Tam', phNumber: 123456789, details: 'notavailabe' },
  ];
}
