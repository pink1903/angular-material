import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
export declare type ThemePaletteCustom = 'success' | 'pending' | 'disabled' | undefined;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  readonly success: ThemePalette | ThemePaletteCustom = 'success';
  readonly pending: ThemePalette | ThemePaletteCustom = 'pending';
  readonly disabled: ThemePalette | ThemePaletteCustom = 'disabled';
}
