import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLs } from 'src/app/common/constant/constant';

@Component({
  selector: 'app-popular-news',
  templateUrl: './popular-news.component.html',
  styleUrls: ['./popular-news.component.scss']
})
export class PopularNewsComponent implements OnInit {

  popularrNews:any = [];

  
  
  
  
  
  
    url=URLs.getAPIUrl() +'read.php';
    constructor(private Route:Router,private http:HttpClient) { }
  
    ngOnInit(): void {
      this.http.get(this.url).subscribe((x:any)=>{
      
        x.body.forEach((e:any,index:number) => {
          if(index <4){
            e.Images = URLs.getAPIUrl() + e.Images;
            this.popularrNews.push(e);
          }
          
        });
  
   
       

    
   
        
      });
    }
    gotoNews(n:any){

      this.Route.navigate(['./news',n.uniqueID]);
    }
  
}
