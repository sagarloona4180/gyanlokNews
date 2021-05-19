import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.scss']
})
export class TopNewsComponent implements OnInit {

  topNewsList:any[] = [];
  constructor(private Route:Router) { }

  ngOnInit(): void {
  }

  gotoNews(){

    this.Route.navigate(['./news']);
  }

}
