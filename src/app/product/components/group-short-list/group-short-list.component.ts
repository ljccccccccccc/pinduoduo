import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { GroupOrder } from '../../domain';

@Component({
  selector: 'app-group-short-list',
  templateUrl: './group-short-list.component.html',
  styleUrls: ['./group-short-list.component.less'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class GroupShortListComponent implements OnInit {

  @Input() groupOrders : GroupOrder[] = [];
  @Input() row = 2;
  constructor() { }

  ngOnInit() {
    //应该从服务器读取
    this.groupOrders = [{
      id:1,
      productId:2,
      startBy:"Kingorld",
      avatar : "assets/avatars/avatar001.png",
      startAt: new Date(2019,9,24),
      remainingNumber:12
    },
    {
      id:2,
      productId:2,
      startBy:"Lisa",
      avatar : "assets/avatars/avatar002.png",
      startAt: new Date(2019,9,25),
      remainingNumber:7
    }]
  }

}
