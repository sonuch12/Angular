import { Component } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchValue: string = '';
  searchValue1: string = 'Try';
  // This for event binding
  changeInputValue(eData: any) {
    this.searchValue = (<HTMLInputElement>eData.target).value;
  }
}
