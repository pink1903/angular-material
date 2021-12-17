import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ThemePaletteCustom} from '../app.component';
@Component({
  selector: 'app-custom-toggle',
  templateUrl: './custom-toggle.component.html',
  styleUrls: ['./custom-toggle.component.scss']
})
export class CustomToggleComponent implements OnInit {

  constructor() { }

  @Input() checked = true;
  @Input() disabled = true;
  @Input()color: ThemePalette | ThemePaletteCustom;
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
