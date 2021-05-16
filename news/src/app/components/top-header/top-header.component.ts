import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {


  navbarSuject: Subject<boolean> = new Subject();
  current_date:any =new Date();
  
  constructor() { }

  ngOnInit(): void {
    // this.navbarSuject.subscribe(x=>{
     
    //   this.navbarStatus = x;
    // })
  }

  showHide(){
    this.navbarSuject.next(true);
  }
}
