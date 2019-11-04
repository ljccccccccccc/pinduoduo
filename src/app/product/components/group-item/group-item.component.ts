import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { GroupOrder } from '../../domain';

@Component({
  selector: 'app-group-item',
  templateUrl: './group-item.component.html',
  styleUrls: ['./group-item.component.less'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class GroupItemComponent implements OnInit {

  startDate : Date;
  futureDate : Date;
  @Input() order : GroupOrder ;
  constructor() { }

  ngOnInit() {
    this.startDate = this.order.startAt;
    this.futureDate = new Date(this.startDate.getTime() + 24 * 3600 * 1000)
  }

}
