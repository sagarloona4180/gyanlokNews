import { group } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { URLs } from 'src/app/common/constant/constant';

@Component({
  selector: 'app-more-news',
  templateUrl: './more-news.component.html',
  styleUrls: ['./more-news.component.scss']
})
export class MoreNewsComponent implements OnInit {

  moreNews: any[] = [];

  url = URLs.getAPIUrl() + 'read.php';
  params: any ={};
  constructor(private Route: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: any) => {

     console.log(atob(params.group));
 
      this.params['group'] = atob(params.group);

  

      this.http.get(this.url).subscribe((x: any) => {
     x.body = x.body.sort((a: any, b: any) => new Date(b.Date).getTime() - new Date(a.Date).getTime());
     x.body =  x.body.filter((e:any)=> e.Country.toLowerCase() ==='india' &&    (e.Deptt ==='State' || e.Deptt ==='Country'));

        x.body.forEach((e: any, index: number) => {
         
            e.Images = URLs.getAPIUrl() + e.Images;
            this.moreNews.push(e);
          

        });







      });
    })


  }
  gotoNews(n: any) {

    this.Route.navigate(['./news', btoa(n.uniqueID)]);
  }

}

