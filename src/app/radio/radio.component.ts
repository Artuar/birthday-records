import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { SortType, RadioModel } from '../app.types';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent {
  @Input() public sortBy: SortType = '';
  @Output() changeSort = new EventEmitter();

  model: RadioModel;

  constructor() {
    this.model = { sortBy: this.sortBy};
  }

  returnModelState() {
    return this.model;
  }

  onChange(type: SortType) {
    this.model.sortBy = type;
    this.changeSort.emit(type);
  }
}
