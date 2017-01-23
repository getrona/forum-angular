import { Component, OnInit } from '@angular/core';
import { Posting } from '../posting.model';

@Component({
  selector: 'app-new-posting',
  templateUrl: './new-posting.component.html',
  styleUrls: ['./new-posting.component.css']
})
export class NewPostingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  posting: Posting;

  newPosting(title, price, description, author, imageUrl) {
    if (imageUrl.length === 0) {
      this.posting = new Posting(title, price, description, author);
    } else {
      this.posting = new Posting(title, price, description, author, imageUrl);
    }
    console.log(this.posting);
  }
}
