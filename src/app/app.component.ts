import { Component } from '@angular/core';
import { CsvService } from 'angular2-json2csv';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  jsonData = [
    {
      name: 'Akhilesh'
    }
  ];

  constructor(private _csvService: CsvService) {}

  downloadCSV() {
    this.jsonData.push({
      name: 'Muthusamy'
    });

    console.log('Converting json into csv');
    // The data must be array of object
    this._csvService.download(this.jsonData, 'json2csv');
  }
}
