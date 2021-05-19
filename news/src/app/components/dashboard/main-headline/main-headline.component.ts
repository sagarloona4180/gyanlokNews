import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-headline',
  templateUrl: './main-headline.component.html',
  styleUrls: ['./main-headline.component.scss']
})
export class MainHeadlineComponent implements OnInit {

mainNews :any= [];
latestNews :any[] = [];
  constructor() { }

  ngOnInit(): void {
   // this.mainNews = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  }

}
