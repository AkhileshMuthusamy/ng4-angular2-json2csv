import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CsvService } from 'angular2-json2csv';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [CsvService],
  bootstrap: [AppComponent]
})
export class AppModule {}
