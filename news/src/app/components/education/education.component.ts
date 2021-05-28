import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLs } from 'src/app/common/constant/constant';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  mainNews:any = [];

  
  
  
  
  
  
  url=URLs.getAPIUrl() +'read.php';
  constructor(private Route:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url).subscribe((x:any)=>{
      x.body = x.body.sort((a:any, b:any) => new Date(b.Date).getTime() - new Date(a.Date).getTime());
      x.body.forEach((e:any,index:number) => {
      
          e.Images = URLs.getAPIUrl() + e.Images;
          this.mainNews.push(e);
   
        
      });

 
     

      x.body=  x.body.filter((e:any)=> e.Deptt ==='Education');

      
      this.mainNews =x.body;

      console.log('Sports', this.mainNews);
 
      
    });
  }
  gotoNews(n:any){

    this.Route.navigate(['./news',btoa(n.uniqueID)]);
  }
}
