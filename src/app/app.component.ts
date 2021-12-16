import { Component } from '@angular/core';
export enum STATE  {
  success = 'green',
  pending = 'yellow',
  disabled = 'gray'
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  readonly success: STATE = STATE.success;
  readonly pending: STATE = STATE.pending;
  readonly disabled: STATE = STATE.disabled;
}
