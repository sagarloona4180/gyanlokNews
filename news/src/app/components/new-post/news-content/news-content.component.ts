import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { URLs } from 'src/app/common/constant/constant';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.scss']
})
export class NewsContentComponent implements OnInit {
  url = URLs.getAPIUrl() + 'singleRead.php';
  params:any = {};
  newsInfo = {};
  loader = false;
  constructor(private route: ActivatedRoute,  private titleService: Title,
    private metaTagService: Meta , private http: HttpClient) { }

  ngOnInit(): void {

   
    this.route.params.subscribe((params: any) => {



      this.params['uniqueID'] = atob(params.uniqueID);
    }


    );
    this.loader = true;
    this.http.post(this.url, this.params).subscribe((x: any) => {
      this.titleService.setTitle(x.Title);
      this.metaTagService.updateTag(
        { news:x.Title }
      );
    
      x.Images = URLs.getAPIUrl() + x.Images;
      this.newsInfo = x;
      this.loader = false;
      console.log(x);


    }, err => {
      this.loader = false;
    })


  }

}
