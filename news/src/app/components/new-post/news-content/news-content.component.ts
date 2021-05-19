import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { URLs } from 'src/app/common/constant/constant';

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.scss']
})
export class NewsContentComponent implements OnInit {
  url=URLs.getAPIUrl() +'singleRead.php';
  params ={};
  newsInfo ={};
  constructor(private route:ActivatedRoute,private http:HttpClient) { }

  ngOnInit(): void {

    this.route.params.subscribe( params => this.params = params);

    this.http.post(this.url, this.params).subscribe((x:any)=>{
      x.Images = URLs.getAPIUrl() + x.Images;
      this.newsInfo =x;

      console.log(x);
   
      
    })
  

}

}
