import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { URLs } from 'src/app/common/constant/constant';

@Component({
  selector: 'app-email-us',
  templateUrl: './email-us.component.html',
  styleUrls: ['./email-us.component.scss']
})
export class EmailUsComponent implements OnInit {
  form: FormGroup = new FormGroup({

    Name: new FormControl('', [Validators.required]),

    Contact: new FormControl('', [Validators.required,  Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),Validators.maxLength(10)]),

    Email: new FormControl('', [Validators.required]),

    Message: new FormControl('', [Validators.required])

    

  });
  url =URLs.getAPIUrl()+'createMail.php';
  error =false;
  sucess: boolean = false;
  constructor(private http:HttpClient,private route:Router) { }

  ngOnInit(): void {
  }



  validateEmail(email:string) {
    const reg = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(String(email).toLowerCase());
  }

  send(){
    const obj:any =
      this.form.value;
  this.sucess = true;
    
   if(this.validateEmail(obj.Email)){
    this.http.post(this.url,obj ).subscribe(x => {
            this.sucess = false;
            this.form.reset();
    },err=>{
       this.sucess = false;
    });
  }else {
   this.sucess = false;
   this.error = true;
  }

}

}
