import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface Tab {
  id:number;
  title: string;
  link: string;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.less']
})
export class ScrollableTabComponent implements OnInit {

  @Input() selectedTabLink : string;
  @Input() menus: Tab[] = [];
  @Input() menuBackgroundColor : string ='';
  @Input() tabColor : string = '';
  @Input() tabActiveColor : string = '';
  @Input() indicatorColor : string = '';
  @Output() tabSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleSelected(index){
    this.tabSelected.emit(this.menus[index]);
  }

}
