import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-warning">
    <p>This is notification</p>
  </div>`,
  styles: [' p{ font-size: 18px; text-align: center;}', ''],
})
export class NotificationComponent {}
