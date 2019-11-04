import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-vertical-grid',
  templateUrl: './vertical-grid.component.html',
  styleUrls: ['./vertical-grid.component.less']
})
export class VerticalGridComponent implements OnInit {


  @Input() itemWidth = '4rem';
  @Input() itemHeight = '4rem';
  @Input() gridGap = '5px';

  @Input() varTemplateRows = `minmax(auto-fill,${this.itemHeight})`;
  @Input() varTemplateColumns = `repeat(auto-fill,minmax(${this.itemWidth}, 1fr))`;
  constructor() { }

  ngOnInit() {
  }

  
  public get templateRows() : string {
    return `${this.varTemplateRows}`;
    //minmax(auto-fill,${this.itemHeight})
  }

  
  public get templateColumns() : string {
    return ``;
    //repeat(auto-fill,minmax(${this.itemWidth}, 1fr))
  }
  
  


}
