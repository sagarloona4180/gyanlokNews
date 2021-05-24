import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLs } from 'src/app/common/constant/constant';

@Component({
  selector: 'app-subscribe-us',
  templateUrl: './subscribe-us.component.html',
  styleUrls: ['./subscribe-us.component.scss']
})
export class SubscribeUsComponent implements OnInit {
  url =URLs.getAPIUrl()+'createSub.php';
  email='';
  sucess =false;
  error: boolean = false;
  loader: boolean = false;
  constructor(private http:HttpClient,private route:Router) { }

  ngOnInit(): void {
  }
  onKey(e:any){
    this.email= e.target.value;
    this.error =false
  }

  subscribe(){
    const obj:any = {
      Email:this.email
    };
    this.loader = true;
   if(this.validateEmail(obj.Email)){
    this.http.post(this.url,obj ).subscribe(x => {
            this.sucess = true;
            this.loader = false;
    },err=>{
      this.loader = false;
    });
  }else {
   this.error = true;
   this.loader = false;
  }

}

  close(){
    this.route.navigate(['./dashboard']);
  }

  
  validateEmail(email:string) {
    const reg = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(String(email).toLowerCase());
  }
}
