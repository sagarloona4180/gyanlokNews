import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {
  @Input() newsInfo :any= {};
  constructor() { }

  ngOnInit(): void {
  }

}
