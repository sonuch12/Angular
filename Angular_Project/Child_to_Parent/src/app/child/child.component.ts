import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  enterSearchValue: string = '';
  @Output()
  serchTextChange: EventEmitter<string> = new EventEmitter<string>();
  textChange() {
    return this.serchTextChange.emit(this.enterSearchValue);
  }
}
