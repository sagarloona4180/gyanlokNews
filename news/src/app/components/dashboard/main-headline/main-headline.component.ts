import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLs } from 'src/app/common/constant/constant';

@Component({
  selector: 'app-main-headline',
  templateUrl: './main-headline.component.html',
  styleUrls: ['./main-headline.component.scss']
})
export class MainHeadlineComponent implements OnInit {

mainNews :any= [];
latestNews :any[] = [];





  url=URLs.getAPIUrl() +'read.php';
  constructor(private Route:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url).subscribe((x:any)=>{
    
      x.body.forEach((e:any) => {
         e.Images = URLs.getAPIUrl() + e.Images;
      });

      console.log(x.body);
      this.mainNews = x.body;

      // this.mainNews.forEach((e:any,index:number )=> {
        
      // });


      this.latestNews =this.mainNews;
      
    });
  }
}
