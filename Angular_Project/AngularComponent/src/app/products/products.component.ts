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
    { id: 3, name: 'Tam', phNumber: 123456789, details: 'notavailabe' },
    { id: 4, name: 'Ram', phNumber: 123456789, details: 'availabe' },
    { id: 5, name: 'Gam', phNumber: 123456789, details: 'notavailabe' },
    { id: 6, name: 'Saam', phNumber: 123456789, details: 'availabe' },
    { id: 7, name: 'Tuam', phNumber: 123456789, details: 'notavailabe' },
    { id: 8, name: 'Xam', phNumber: 123456789, details: 'availabe' },
  ];
  getAll() {
    return this.pro.length;
  }
  getAvailable() {
    return this.pro.filter((x) => x.details == 'availabe').length;
  }
  getNotAvailable() {
    return this.pro.filter((y) => y.details == 'notavailabe').length;
  }
}
