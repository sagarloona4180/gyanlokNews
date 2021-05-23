import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLs } from 'src/app/common/constant/constant';

@Component({
  selector: 'app-world-news',
  templateUrl: './world-news.component.html',
  styleUrls: ['./world-news.component.scss']
})
export class WorldNewsComponent implements OnInit {

  mainNews:any = [];

  
  
  
  
  
  
  url=URLs.getAPIUrl() +'read.php';
  constructor(private Route:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url).subscribe((x:any)=>{
    
      x.body.forEach((e:any,index:number) => {
       
          e.Images = URLs.getAPIUrl() + e.Images;
          this.mainNews.push(e);
        
        
      });

 
     

  
 
      x.body=  x.body.filter((e:any)=> e.Country.toLowerCase()  !=='india');

      
      this.mainNews =x.body;

      console.log('world', this.mainNews);
      
    });
  }
  gotoNews(n:any){

    this.Route.navigate(['./news',n.uniqueID]);
  }

}