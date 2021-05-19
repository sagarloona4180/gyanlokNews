import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { URLs } from 'src/app/common/constant/constant';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.scss']
})
export class TopNewsComponent implements OnInit {

  topNewsList:any[] = [];
  url=URLs.getAPIUrl() +'read.php';
  constructor(private Route:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url).subscribe((x:any)=>{
    
      x.body.forEach((e:any) => {
         e.Images = URLs.getAPIUrl() + e.Images;
      });

      console.log(x.body);
      this.topNewsList = x.body;
      
    })
  }

  gotoNews(n:any){

    this.Route.navigate(['./news',n.uniqueID]);
  }

}
