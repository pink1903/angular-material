import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import {STATE} from '../app.component';

@Component({
  selector: 'app-custom-toggle',
  templateUrl: './custom-toggle.component.html',
  styleUrls: ['./custom-toggle.component.scss']
})
export class CustomToggleComponent implements OnInit {

  constructor() { }

  @Input() checked = true;
  @Input() disabled = true;
  @Input() state: STATE | undefined;
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
