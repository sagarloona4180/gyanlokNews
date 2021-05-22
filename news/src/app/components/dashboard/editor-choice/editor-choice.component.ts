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

  mainNews:any = [];

  
  
  
  
  
  
  url=URLs.getAPIUrl() +'read.php';
  constructor(private Route:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url).subscribe((x:any)=>{
    
      x.body.forEach((e:any,index:number) => {
        if(index <8){
          e.Images = URLs.getAPIUrl() + e.Images;
          this.mainNews.push(e);
        }
        
      });

 
     

  
 
      
    });
  }

}
