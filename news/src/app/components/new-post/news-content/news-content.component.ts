import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { URLs } from 'src/app/common/constant/constant';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.scss']
})
export class NewsContentComponent implements OnInit,OnDestroy {
  url = URLs.getAPIUrl() + 'singleRead.php';
  params:any = {};
  newsInfo = {};
  loader = false;
  constructor(private route: ActivatedRoute,  private titleService: Title,
    private metaTagService: Meta , private http: HttpClient) { }

  ngOnInit(): void {

    this.metaTagService.removeTag("name='news'");

 
    this.route.params.subscribe((params: any) => {



      this.params['uniqueID'] = atob(params.uniqueID);
    }


    );
    this.loader = true;
    this.http.post(this.url, this.params).subscribe((x: any) => {
      x.Images = URLs.getAPIUrl() + x.Images;
      this.titleService.setTitle(x.Title);
    
      this.metaTagService.addTags([
        { name: 'news', httpEquiv:'origin-trial', content: x.Title },      
        { property: 'og:image:secure_url', content: x.Images },
        { name: 'description',  content: x.Description },
        { property:"article:section" ,content:"Latest News"},
        { charset: 'UTF-8' }


      ]);
    
    
      this.newsInfo = x;
      this.loader = false;
      console.log(x);


    }, err => {
      this.loader = false;
    })


  }
ngOnDestroy(){
  this.metaTagService.removeTag('httpEquiv="origin-trial"');
  this.metaTagService.removeTag('property="og:image:secure_url"');
  this.metaTagService.removeTag('name="description"');
  this.metaTagService.removeTag('property="article:section"');

}
}
