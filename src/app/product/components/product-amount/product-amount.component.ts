import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-amount',
  templateUrl: './product-amount.component.html',
  styleUrls: ['./product-amount.component.less']
})
export class ProductAmountComponent implements OnInit {

  @Input()  public count : number = 0 ;
  @Output() amountChange = new EventEmitter<number>();//发送一个数字

  constructor() { }

  ngOnInit() {
  }

  handleIncrease () {
    this.amountChange.emit(++this.count);
  }
  handleDecrease () {
    if(this.count <= 0) {
      return ;
    }
    this.amountChange.emit(--this.count);
  }

}
