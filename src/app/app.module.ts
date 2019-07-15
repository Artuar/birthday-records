import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { RadioComponent } from './radio/radio.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    RadioComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
