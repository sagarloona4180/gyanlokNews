import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
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
  constructor(private  config: NgbCarouselConfig, private Route:Router,private http:HttpClient) { 

   
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
    this.http.get(this.url).subscribe((x:any)=>{
      x.body = x.body.sort((a:any, b:any) => new Date(b.Date).getTime() - new Date(a.Date).getTime());
      x.body.forEach((e:any) => {
         e.Images = URLs.getAPIUrl() + e.Images;
      });

      const mainNews =  x.body.filter((e:any)=> new Date(e.Date).getDate()  === new Date().getDate());
      if(mainNews.length > 0){
        this.mainNews = mainNews;
      }else{
        this.mainNews = x.body;
      }
    

    console.log('  this.mainNews', this.mainNews )


      this.latestNews = x.body;
      
    });
  }


  gotoNews(n:any){

    this.Route.navigate(['./news',btoa(n.uniqueID)]);
  }



}
