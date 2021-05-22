import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-password',
  templateUrl: './admin-password.component.html',
  styleUrls: ['./admin-password.component.scss']
})
export class AdminPasswordComponent implements OnInit {
  @ViewChild('password', { static: true }) password:any;
  pass:string ='';
  constructor(private renderer:Renderer2,private route:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.renderer.addClass(this.password.nativeElement,'show');
  
  
  }

  close(){
    this.renderer.removeClass(this.password.nativeElement,'show');
  }


  onKey(e:any){
    this.pass= e.target.value;
  }
  go(){
    if(this.pass ==='news12345'){
      this.route.navigate(['./admin']);
      this.renderer.removeClass(this.password.nativeElement,'show');
    }else{
      this.toastr.error('Passord not matched');

    }
    
   
  }

}
