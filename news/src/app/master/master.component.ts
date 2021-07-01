import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { GridComponent, RowClassArgs } from '@progress/kendo-angular-grid';
import { GroupDescriptor, orderBy, SortDescriptor } from '@progress/kendo-data-query';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MasterComponent implements OnInit {
  public expandedDetailKeys: any[] = [];
  public columns: any[] = [
    // { field: "QuantityPerUnit" ,title: "QuantityPerUnit" },
    { field: "ProductID" ,title: "Client Name" },
    // { field: "ProductName" ,title: "c2" },
    // { field: "QuantityPerUnit",title: "c3"  },
    // { field: "Status",title: "status"  }
  ];
  @ViewChild(GridComponent) grid: any ;
  public sort: SortDescriptor[] = [
    {
      field: "ProductID",
      dir: "asc",
    },
  ];
  public incolumns: any[] = [
    // { field: "" ,title: "" },
    { field: "ProductID" ,title: "Mercury Engagement Code" },
    { field: "ProductName" ,title: "Mercury Techenlogy Contact" },
    { field: "QuantityPerUnit",title: "Mercury Engagement Code"  },
    { field: "Status",title: "status"  }
  ];
  gridData:any;
  isloading: boolean =false;
  innersort: SortDescriptor[] =[
    {
      field: "ProductID",
      dir: "asc",
    },
  ];;


 
ngOnInit():void{

  this.isloading = true;
  setTimeout(() => {
    this.gridData = [{
      ProductID:"aasas",
      ProductName:"asasa",
      QuantityPerUnit:"asas",
      Status:'active',
      id:"1"
  
  
    },{
      ProductID:"aasas",
      ProductName:"asasa",
      QuantityPerUnit:"asas",
      Status:'active',
      id:"2"
  
  
    },
    {
      ProductID:"3aasas",
      ProductName:"asasa",
      QuantityPerUnit:"asas",
      Status:'active',
      id:"3"
  
  
    },
  
    {
      ProductID:"4aasas",
      ProductName:"asasa",
      QuantityPerUnit:"asas",
      Status:'active',
      id:"4"
  
  
    },
  
    {
      ProductID:"5aasas",
      ProductName:"asasa",
      QuantityPerUnit:"asas",
      Status:'active',
      id:"5"
  
  
    },
  
    {
      ProductID:"6aasas",
      ProductName:"asasa",
      QuantityPerUnit:"asas",
      Status:'active',
      id:"6"
  
  
    },
  
    {
      ProductID:"7aasas",
      ProductName:"asasa",
      QuantityPerUnit:"asas",
      Status:'active',
      id:"7"
  
  
    },
  
  
    {
      ProductID:"8aasas",
      ProductName:"asasa",
      QuantityPerUnit:"asas",
      Status:'active',
      id:"8"
  
  
    },
  
    {
      ProductID:"9aasas",
      ProductName:"asasa",
      QuantityPerUnit:"asas",
      Status:'active',
      id:"9"
  
  
    },
  
    {
      ProductID:"10aasas",
      ProductName:"asasa",
      QuantityPerUnit:"asas",
      Status:'active',
      id:"10"
  
  
    },
    {
      ProductID:"11aasas",
      ProductName:"asasa",
      QuantityPerUnit:"asas",
      Status:'active',
      id:"11"
  
  
    },
    {
      ProductID:"12aasas",
      ProductName:"asasa",
      QuantityPerUnit:"asas",
      Status:'active',
      id:"12"
  
  
    },

    {
      ProductID:"13aasas",
      ProductName:"asasa",
      QuantityPerUnit:"asas",
      Status:'active',
      id:"13"
  
  
    },
    
    {
      ProductID:"14aasas",
      ProductName:"asasa",
      QuantityPerUnit:"asas",
      Status:'active',
      id:"14"
  
  
    },
    {
      ProductID:"7aasas",
      ProductName:"asasa",
      QuantityPerUnit:"asas",
      Status:'active',
      id:"7"
  
  
    },
  
  
    {
      ProductID:"8aasas",
      ProductName:"asasa",
      QuantityPerUnit:"asas",
      Status:'active',
      id:"8"
  
  
    },
  
    {
      ProductID:"9aasas",
      ProductName:"asasa",
      QuantityPerUnit:"asas",
      Status:'active',
      id:"9"
  
  
    },
  
    {
      ProductID:"10aasas",
      ProductName:"asasa",
      QuantityPerUnit:"asas",
      Status:'active',
      id:"10"
  
  
    },
    {
      ProductID:"11aasas",
      ProductName:"asasa",
      QuantityPerUnit:"asas",
      Status:'active',
      id:"11"
  
  
    },
    {
      ProductID:"12aasas",
      ProductName:"asasa",
      QuantityPerUnit:"asas",
      Status:'active',
      id:"12"
  
  
    },

    {
      ProductID:"13aasas",
      ProductName:"asasa",
      QuantityPerUnit:"asas",
      Status:'active',
      id:"13"
  
  
    },
    
    {
      ProductID:"14aasas",
      ProductName:"asasa",
      QuantityPerUnit:"asas",
      Status:'active',
      id:"14"
  
  
    }
  
  ];
    this.isloading= false;
  }, 500);
  
}



onExpandHandler(eent:any){
  this.gridData[0].children =[{
    ProductID:"kaasas",
    ProductName:"kasasa",
    QuantityPerUnit:"kasas",
    Status:'kactive',
    id:"1.1"
  },
  {
    ProductID:"kaasas",
    ProductName:"kasasa",
    QuantityPerUnit:"kasas",
    Status:'kactive',
    id:"1.2"
  }]

  this.loadProducts();

  console.log(eent);

}
public rowCallback(context: RowClassArgs) {
  const isEven = context.index % 2 == 0;
  return {
      even: isEven,
      odd: !isEven
  };
}
public rowInCallback(context: RowClassArgs) {
  const isEven = context.index % 2 == 0;
  return {
      ineven: isEven,
      inodd: !isEven
  };
}

expand(v:any){
  if(this.expandedDetailKeys.includes(v.id)){
    //collapse
    this.expandedDetailKeys=this.expandedDetailKeys.filter(e=> e!==v.id);
  }else{
    this.expandedDetailKeys.push(v.id);;
    this.onExpandHandler({})
  }


}



public expandDetailsBy = (dataItem: any): any => {
  return dataItem.id;

};


filter(){
this.gridData = this.gridData.filter( (e:any)=> parseInt(e.id)> 5);
}



  public sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.loadProducts();
   
  }


  loadProducts(): void {
    this.gridData = 
       orderBy(this.gridData, this.sort)
      
    
  }

  sortinnerChange(sort: SortDescriptor[]): void {
    this.innersort = sort;
    //this.loadProducts();
   
  }
}