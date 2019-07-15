import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { SortType, RadioModel } from '../app.types';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent {
  @Input() public sortBy: SortType = SortType.Name;
  @Output() changeSort = new EventEmitter();

  form: FormGroup;
  model: RadioModel;

  constructor(formBuilder: FormBuilder) {
    this.model = { sortBy: SortType.Name};
    this.form = formBuilder.group({ sortBy: SortType.Name});
  }

  returnModelState() {
    return this.model;
  }

  onChange() {
    this.model = this.form.controls.sortBy.value;
    this.changeSort.emit(this.model);
  }
}
