import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, MetaDefinition } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { URLs } from 'src/app/common/constant/constant';

@Component({
  selector: 'app-top-headlines',
  templateUrl: './top-headlines.component.html',
  styleUrls: ['./top-headlines.component.scss']
})
export class TopHeadlinesComponent implements OnInit,OnDestroy {

  todayNews:any[] = [];
  url=URLs.getAPIUrl() +'read.php';
  constructor(private metaTagService: Meta ,private Route:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url).subscribe((x:any)=>{
      x.body = x.body.sort((a:any, b:any) => new Date(b.Date).getTime() - new Date(a.Date).getTime());
      x.body.forEach((e:any) => {
         e.Images = URLs.getAPIUrl() + e.Images;

         this.metaTagService.addTags([
          { property: 'name', httpEquiv:'origin-trial', content: e.Title },
        
         
          
        ]);




        
      });




       

      console.log(x.body);  x.body=  x.body.filter((e:any)=> e.Filter ==='H' && new Date(e.Date).getDate()  === new Date().getDate());
      this.todayNews = x.body;
      
    })
  }

  gotoNews(n:any){

    this.Route.navigate(['./news',btoa(n.uniqueID)]);
  }

  ngOnDestroy(){
    this.metaTagService.removeTag("property='name'");

  
  }

}
