import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLs } from 'src/app/common/constant/constant';


@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {

  mainNews:any = [];

  
  
  
  
  
  
  url=URLs.getAPIUrl() +'read.php';
  constructor(private Route:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url).subscribe((x:any)=>{
    
      x.body.forEach((e:any,index:number) => {
      
         
          e.Images = URLs.getAPIUrl() + e.Images;
        
  
      });

 
     

  
 
      x.body=  x.body.filter((e:any)=> e.Deptt ==='Business');

      
      this.mainNews =x.body;

      console.log('Business', this.mainNews);
      
    });
  }
  gotoNews(n:any){

    this.Route.navigate(['./news', btoa(n.uniqueID)]);
  }
}
