import { Component, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Birthday, SortType } from '../app.types';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() sortBy: SortType = '';

  birthdays: Birthday[] = [
    {
      name: 'John Sina',
      birth: '11/30/2011'
    }, {
      name: 'Barcy Washington',
      birth: '09/16/1992'
    }, {
      name: 'Peter Parker',
      birth: '01/16/1992'
    }, {
      name: 'Jimmy Shergil',
      birth: '12/12/2001'
    }, {
      name: 'Alexander Alfred',
      birth: '02/09/1891'
    }, {
      name: 'Krishna Gupta',
      birth: '12/01/1982'
    }, {
      name: 'Sania Mirza',
      birth: '11/30/2011'
    }, {
      name: 'Lata Pathak',
      birth: '10/31/1999'
    }
  ];

  constructor(private dateFormater: DatePipe) {}

  arrangeItems() {
    switch (this.sortBy) {
      case 'name':
        return [...this.birthdays].sort(this.compareNames);
      case 'age':
        return [...this.birthdays].sort(this.compareDates);
      default:
        return this.birthdays;
    }
  }

  compareDates(a: Birthday, b: Birthday) {
    const aBirth = new Date(a.birth).getTime();
    const bBirth = new Date(b.birth).getTime();
    return aBirth > bBirth ? 1 : aBirth < bBirth ? -1 : 0;
  }

  compareNames(a: Birthday, b: Birthday) {
    return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
  }

  getDate(str: string) {
      return this.dateFormater.transform(str, 'MMMM dd yyyy');
  }
}
