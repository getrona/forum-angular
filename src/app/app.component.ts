import { Component } from '@angular/core';
import { Posting } from './posting.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allPostings: Posting[] = [];
  searchFilter: string = '';
  clearSearch(): void {
    this.searchFilter = "";
  }
}
