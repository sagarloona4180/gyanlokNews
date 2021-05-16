import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  @Input() navbarSuject: Subject<boolean> = new Subject();
  navbarStatus: boolean =false;;
  constructor() { }

  ngOnInit(): void {
 this.navbarSuject.subscribe(x=>{
     
      this.navbarStatus = x;
    })
  }

  closeNavabar(){
    this.navbarSuject.next(false);
  }


  showHide(){
    this.navbarSuject.next(true);
  }

}
