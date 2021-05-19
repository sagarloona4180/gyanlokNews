import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-image',
  templateUrl: './content-image.component.html',
  styleUrls: ['./content-image.component.scss']
})
export class ContentImageComponent implements OnInit {
  @Input() newsInfo :any= {};
  constructor() { }

  ngOnInit(): void {
  }

}
