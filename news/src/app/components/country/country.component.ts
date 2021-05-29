import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLs } from 'src/app/common/constant/constant';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  mainNews:any[] = [];
  popularNews:any[] = [];

  
  
  
  
  
  
  url=URLs.getAPIUrl() +'read.php';
  constructor(private Route:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url).subscribe((x:any)=>{
      x.body = x.body.sort((a:any, b:any) => new Date(b.Date).getTime() - new Date(a.Date).getTime());
      x.body.forEach((e:any,index:number) => {
      
          e.Images = URLs.getAPIUrl() + e.Images;
        
   
        
      });

 
     
     const country =  x.body.filter((e:any)=> e.Country.toLowerCase() ==='india' &&   e.Filter.toLowerCase() !=='p'  &&  (e.Deptt ==='State' || e.Deptt ==='Country'));

      const ppopular =  x.body.filter((e:any)=>  e.Country.toLowerCase() ==='india' && e.Filter.toLowerCase() ==='p'  &&   (e.Deptt ==='State' || e.Deptt ==='Country') );
      
      this.mainNews  = country;

      this.popularNews  = ppopular;

      console.log(x.body)

  
 
      
    });
  }
  gotoNews(n:any){

    this.Route.navigate(['./news',btoa(n.uniqueID)]);
  }
  moreNews(){
    this.Route.navigate(['./more',btoa('country')]);
  }
}
