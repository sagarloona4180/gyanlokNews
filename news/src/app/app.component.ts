
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Meta } from '@angular/platform-browser'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'news';



  private previousUrl: string ='';
  private currentUrl: string;

  constructor(private router: Router,private metaTagService: Meta) {


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

  
}


 

