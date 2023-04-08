import { Component } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent {
  selectedCustomer: any;
  customers: Customer[] = [
    {
      custId: 121,
      name: 'Pam',
      address: 'Tarsali',
      city: 'Vadodara',
      country: 'India',
    },
    {
      custId: 2,
      name: 'Tam',
      address: 'Tarsali',
      city: 'Vadodara',
      country: 'India',
    },
    {
      custId: 3,
      name: 'Gam',
      address: 'Vatva',
      city: 'Ahmedabad',
      country: 'UK',
    },
    {
      custId: 4,
      name: 'Ram',
      address: 'Tarsali',
      city: 'Lucknow',
      country: 'USA',
    },
  ];
}
