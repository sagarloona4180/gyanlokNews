
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit  {
  public columns: any[] = [
    { field: "" ,title: "" },
    { field: "ProductID" ,title: "c1" },
    { field: "ProductName" ,title: "c2" },
    { field: "QuantityPerUnit",title: "c3"  },
    { field: "Status",title: "status"  }
  ];
  gridData:any;
  isloading: boolean =false;

 
 
ngOnInit():void{

  this.isloading = true;
  setTimeout(() => {
    this.gridData = [{
      ProductID:"aasas",
      ProductName:"asasa",
      QuantityPerUnit:"asas",
      Status:'active'
  
  
    }];
    this.isloading= false;
  }, 500);
  
}



}