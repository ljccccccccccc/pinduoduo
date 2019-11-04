import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../domain';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.less']
})
export class ProductCardComponent implements OnInit {


  @Input() public product : Product;
  constructor(private router : Router) { }

  ngOnInit() {
  }

  public linkTo (id) : void {
    this.router.navigate(['/products/'+id]);
  }

}
