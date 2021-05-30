
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Meta, MetaDefinition } from '@angular/platform-browser'; 
import { HttpClient } from '@angular/common/http';
import { wheather } from './common/constant/constant';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'news';



  private previousUrl: string ='';
  private currentUrl: string;

  constructor( private metaTagService: Meta ,private router: Router) {

 
    const locale: MetaDefinition   =  { property: 'og:locale', content: 'en_US' };
    const website: MetaDefinition = { property: 'og:type', content: 'Website'};
    const titleService: MetaDefinition = { property: 'og:title', content: 'Gyan Lok  -India News| World New|Sports News Jammu News | Kashmir News | Ladakh | Latest News | JK'};
    const ogdesc: MetaDefinition = { name: 'og:description', content: 'Gyan Lok  provides the latest news stories from India,  Jammu Kashmir and Ladakh , India and the World.Get todays headlines from politics,sports,business'};
 

    const ogtitle: MetaDefinition   =  { name: 'og:title', content: 'Gyan Lok' };
    const ogSitename: MetaDefinition = { name: 'og:site_name', content: 'Gyan Lok News'};
    const ogUrl: MetaDefinition = { name: 'og:url', content: 'http://gyanloknews.in/#/dashboard'};

    const character: MetaDefinition ={ charset: 'UTF-8' };
    metaTagService.addTag(ogtitle);
    metaTagService.addTag(ogSitename);
     metaTagService.addTag(ogUrl);
    this.metaTagService.addTag(ogdesc);
    this.metaTagService.addTag(character);


    this.metaTagService.addTag(website);
    this.metaTagService.addTag(titleService);
    this.metaTagService.addTag(locale);



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
