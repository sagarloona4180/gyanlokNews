import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLs } from 'src/app/common/constant/constant';

@Component({
  selector: 'app-editor-choice',
  templateUrl: './editor-choice.component.html',
  styleUrls: ['./editor-choice.component.scss']
})
export class EditorChoiceComponent implements OnInit {

  editorNews: any = [];







  url = URLs.getAPIUrl() + 'read.php';
  constructor(private Route: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url).subscribe((x: any) => {
      x.body = x.body.sort((a:any, b:any) => new Date(b.Date).getTime() - new Date(a.Date).getTime());
      x.body.forEach((e: any, index: number) => {

        e.Images = URLs.getAPIUrl() + e.Images;



      });



      x.body = x.body.filter((e: any) => e.Filter === 'E');


      this.editorNews = x.body;

      console.log('editor', this.editorNews);







    });
  } gotoNews(n: any) {

    this.Route.navigate(['./news', btoa(n.uniqueID)]);
  }

}
