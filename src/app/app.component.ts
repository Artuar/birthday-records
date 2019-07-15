import { Component } from '@angular/core';
import { SortType, RadioModel } from './app.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public sortBy: SortType = '';

  changeSortType(type: SortType) {
    this.sortBy = type;
  }
}
