import { Component, OnInit } from '@angular/core';
import { ExpandEvent } from '@progress/kendo-angular-treelist';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  private expandedIds: any[] = [1];
  public columns: any[] = [
    { field: "" ,title: "" },
    { field: "ProductID" ,title: "c1" ,  expandable : true},
    { field: "ProductName" ,title: "c2" },
    { field: "QuantityPerUnit",title: "c3"  },
    { field: "Status",title: "status"  }
  ];


  public rootData =[
    {
      ProductID: 1,
      ProductName: 'asasap1',
      QuantityPerUnit: 'asas',
      Status: 'active1',
      data: [
        {
          ProductID: 'aasas1',
          ProductName: 'asasa',
          QuantityPerUnit: 'asas',
          Status: 'active1'
        }
      ]
    },
    {
      ProductID: 2,
      ProductName: 'asasap2',
      QuantityPerUnit: 'asas',
      Status: 'active1',
      data: [
        {
          ProductID: 'aasas',
          ProductName: 'asasa',
          QuantityPerUnit: 'asas',
          Status: 'active',
          data: [
            {
              ProductID: 'aasas',
              ProductName: 'asasa',
              QuantityPerUnit: 'asas',
              Status: 'active'
            }
          ]
        }
      ]
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }




  // Use an arrow function to capture the 'this' execution context of the class.
  public fetchChildren = (item:any)=> {
      return item.data;
  }

  public hasChildren = (item: any): boolean => {
      return item.data && item.data.length > 0;
  }


  public isExpanded = (dataItem: any): boolean => {
    return this.expandedIds.indexOf(dataItem.ProductID) > -1;
  };

  /**
   * A `collapse` event handler that will collapse the item.
   */
  public onCollapse(args: ExpandEvent): void {
    this.expandedIds = this.expandedIds.filter((ProductID) => ProductID !== args.dataItem.ProductID);
  }

  /**
   * A `expand` event handler that will expand the item.
   */
  public onExpand(args: ExpandEvent): void {
    this.expandedIds.push(args.dataItem.ProductID);
  }

}
