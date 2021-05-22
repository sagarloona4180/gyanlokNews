import { Component, ComponentFactoryResolver, Input, OnInit, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { AdminPasswordComponent } from '../admin-password/admin-password.component';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  @Input() navbarSuject: Subject<boolean> = new Subject();
  navbarStatus: boolean =false;;
  constructor(private componentFactoryResolver: ComponentFactoryResolver,  private viewContainerRef: ViewContainerRef){}

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


  checkAdminPasswoed(){
       const rs:any = this.viewContainerRef.createComponent(this.componentFactoryResolver.resolveComponentFactory(AdminPasswordComponent));
    

        //  rs.instance.emitModal.subscribe(
        //    (data:any) => {
 
        //      this.viewContainerRef.clear();
        //      return true;
 
        //    }
        //  );
  }
}
