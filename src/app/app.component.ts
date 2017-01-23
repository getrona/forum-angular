import { Component } from '@angular/core';
import { Posting } from './posting.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allPostings: Posting[] = [
    new Posting('ping-pong table', '35', 'it is fairly new, yeah call me if you want to buy it.', 'Levi Johnson', 'https://www.vectorgraphit.com/wp-content/uploads/2014/11/pingpong-preview-600x252.jpg'),
    new Posting('Looking for ping-pong table', '135', 'yeah call me if you have one.', 'reverend Johnson')
  ];
  searchFilter: string = '';
  clearSearch(): void {
    this.searchFilter = "";
  }
}
