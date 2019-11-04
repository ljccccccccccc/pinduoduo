import { Component, OnInit, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { OrderService } from '../../service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductVariant } from '../../domain';
import { filter, map, switchMap } from 'rxjs/operators';
import { DialogService } from 'src/app/dialog/services';
import { ProductVariantDialogComponent } from '../product-variant-dialog/product-variant-dialog.component';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.less'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ProductContainerComponent implements OnInit {

  public variants$ : Observable<ProductVariant[]>;

  public selectedIndex : number = 0;
  constructor(
    private location: Location,
    private service: OrderService,
    private route: ActivatedRoute,
    private dialogService : DialogService,
    private router : Router
  ) { }

  ngOnInit() {
    const productId$ = this.route.paramMap.pipe(
      filter(params => params.has('productId')),
      map(params => params.get('productId'))
    )

    this.variants$ = productId$.pipe(
      switchMap(productId => this.service.getProductVariantsByProductId(productId))
    )
  }

  handleDirectBuy(variants : ProductVariant) {

  }
  handleGroupBuy(variants : ProductVariant) {
    const top = 40;
    const formSubmitted = new EventEmitter();
    formSubmitted.subscribe(ev => {
      this.dialogService.saveData(ev);
      this.router.navigate(['/order/confirm']);
    });
    const selected = new EventEmitter();
    selected.subscribe(ev => {
        console.log(ev);
        this.selectedIndex=ev;
    })
    this.dialogService.open(ProductVariantDialogComponent,{
      inputs : {
        variants,
        selectedIndex : this.selectedIndex
      },
      outputs : {
        formSubmitted,
        selected
      },
      position: {
        top: `${top}`,
        left : `0`,
        width : `100%`,
        height : `${100 - top}%`
      }
    });
  }

}
