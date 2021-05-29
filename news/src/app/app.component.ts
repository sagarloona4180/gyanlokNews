
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Meta } from '@angular/platform-browser'; 
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'news';



  private previousUrl: string ='';
  private currentUrl: string;

  constructor(private router: Router,private http:HttpClient  ,private metaTagService: Meta) {
  this.getLocation();
 
    this.metaTagService.addTags([
      { name: 'keywords', content: 'News, Covid 19, jammu & kashmir,manoj sinha,kathua update,dc kathua' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Sagar Kumar' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
     
      { charset: 'UTF-8' }
    ]);
    this.currentUrl = this.router.url;
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {        
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;

        console.log(this.previousUrl ,this.previousUrl);
      };
    });
  }

  public getPreviousUrl() {
    return this.previousUrl;
  }    

  



 

getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(e=>{
      console.log(e);
    const url =   'http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=533cc2bdfa5b5fb1d59efd3e38c10344'
    //   this.http.get(url).subscribe((w:any)=>{
    //  console.log(w);
    //   })
    });
  } 
}


}
