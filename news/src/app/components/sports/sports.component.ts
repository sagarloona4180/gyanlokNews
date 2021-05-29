import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLs } from 'src/app/common/constant/constant';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {

  mainNews:any[] = [];
  popularNews:any[] = [];
  
  
  
  
  
  
  url=URLs.getAPIUrl() +'read.php';
  constructor(private Route:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url).subscribe((x:any)=>{
    
      x.body.forEach((e:any,index:number) => {
      
          e.Images = URLs.getAPIUrl() + e.Images;

   
        
      });

 


      
      this.mainNews =x.body.filter((e:any)=> e.Deptt ==='Sports' && e.Filter.toLowerCase() !=='p');;

          
      this.popularNews =x.body.filter((e:any)=> e.Deptt ==='Sports' && e.Filter.toLowerCase() ==='p');;

    
 
      
    });
  }
  gotoNews(n:any){

    this.Route.navigate(['./news',btoa(n.uniqueID)]);
  }
}
