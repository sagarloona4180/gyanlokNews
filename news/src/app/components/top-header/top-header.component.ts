import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { wheather } from 'src/app/common/constant/constant';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {


  navbarSuject: Subject<boolean> = new Subject();
  current_date:any =new Date();
  temp:any ={};
  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getLocation();
   
  }

  showHide(){
    this.navbarSuject.next(true);
  }


  getLocation() {
 
    this.http.get('http://api.ipify.org/?format=json').subscribe((e:any)=>{0
    
    
      this.http.get('https://ipinfo.io/'+e.ip+'/json?token=83ab5e62c4e9af' ).subscribe((d:any)=>{
d.lat =d.loc.split(',')[0];
d.lon= d.loc.split(',')[1];
   const url =   'http://api.openweathermap.org/data/2.5/weather?lat='+d.lat+'&lon='+d.lon+'&appid=533cc2bdfa5b5fb1d59efd3e38c10344&units=metric'
    //  const url ='https://api.openweathermap.org/data/2.5/onecall?lat=32.702464&lon=74.86177280000001&appid=533cc2bdfa5b5fb1d59efd3e38c10344&units=metric';

    
    this.http.get(url).subscribe((w:any)=>{
          wheather.value = w;
          this.temp =w;

          console.log(w);
        
      });
    } )
  } ) 
  
  }
}
