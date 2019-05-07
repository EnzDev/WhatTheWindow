import { Component } from '@angular/core';
import {CSSDimension, Size, WindowComponent} from '../window.interface';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.sass']
})
export class TaskbarComponent implements WindowComponent {
  readonly  forcedLayer = 5001; // Force
  readonly maxSize = {
    height: new CSSDimension(4, 'vh'),
    width: new CSSDimension(100, 'vw')
  };
  readonly minSize = this.maxSize; // Immutable size
  size = this.maxSize;

  constructor() {
    this.size = this.maxSize;
  }

  // Ignore resizing
  askForResize(desiredSize: Size) {}
}
