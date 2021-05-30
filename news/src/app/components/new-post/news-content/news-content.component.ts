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
export class NewsContentComponent implements OnInit, OnDestroy {
  url = URLs.getAPIUrl() + 'singleRead.php';
  params: any = {};
  newsInfo = {};
  loader = false;
  encrypturl: string = '';
  constructor(private route: ActivatedRoute, private titleService: Title,
    private metaTagService: Meta, private http: HttpClient) { }

  ngOnInit(): void {

    this.metaTagService.removeTag('property="news');


    this.route.params.subscribe((params: any) => {
      this.metaTagService.removeTag('property="og:url"');
      this.metaTagService.removeTag('property="og:title"');
      this.metaTagService.removeTag('property="og:description"');
      this.metaTagService.removeTag('property="og:type"');
      this.metaTagService.removeTag('property="og:image"');
      this.metaTagService.removeTag('property="article:section"');

      this.encrypturl = 'http://gyanloknews.in/news' + '/' + params.uniqueID;
      this.params['uniqueID'] = atob(params.uniqueID);
    }


    );
    this.loader = true;
    this.http.post(this.url, this.params).subscribe((x: any) => {
      x.Images = URLs.getAPIUrl() + x.Images;
      this.titleService.setTitle(x.Title);

      this.metaTagService.addTags([
        { property: 'og:url', httpEquiv: 'origin-trial', content: this.encrypturl },
        { property: 'og:title', content: x.Title },
        { property: 'og:image', content: x.Images },
        { property: 'og:type', content: 'Website' },
        { property: 'og:site_name', content: 'Gyan Lok News' },
        { name: 'category', content: x.Deptt },
        { property: 'og:description', content: x.Description },
        { charset: 'UTF-8' }

      ]);


      this.newsInfo = x;
      this.loader = false;
      console.log(x);


      this.metaTagService.removeTag('property="news');
    }, err => {
      this.loader = false;
    })


  }
  ngOnDestroy() {
    this.metaTagService.removeTag('property="og:url"');
    this.metaTagService.removeTag('property="og:title"');
    this.metaTagService.removeTag('property="og:description"');
    this.metaTagService.removeTag('property="og:type"');
    this.metaTagService.removeTag('property="og:image"');
    this.metaTagService.removeTag('property="og:site_name"');
    this.metaTagService.removeTag('name="category');

  }
}
