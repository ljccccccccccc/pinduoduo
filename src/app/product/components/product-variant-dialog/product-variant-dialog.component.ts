import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ProductVariant } from '../../domain';
import { DialogService } from 'src/app/dialog/services';

@Component({
  selector: 'app-product-variant-dialog',
  templateUrl: './product-variant-dialog.component.html',
  styleUrls: ['./product-variant-dialog.component.css']
})
export class ProductVariantDialogComponent implements OnInit {

  @Input() variants : ProductVariant[] = [];
  @Output() formSubmitted = new EventEmitter();
  @Output() selected = new EventEmitter();
  @Input() selectedVariantIndex:number = 0;

  public count:number = 0;

  constructor(
    private dialogService : DialogService
  ) { }

  ngOnInit() {
    console.log(this.variants);
  }

  
  public get price() : number {
    if(this.selectedVariantIndex < 0 || this.variants.length === 0){
      return 0;
    }
    return this.variants[this.selectedVariantIndex].price;
  }
  
  
  public get selectedVariantImage() : string {
    if(this.selectedVariantIndex < 0 || this.variants.length === 0){
      return '';
    }
    return this.variants[this.selectedVariantIndex].productVariantImages[0].imgUrl;
  }

  
  public get selectedVariantName() : string {
    if(this.selectedVariantIndex < 0 || this.variants.length === 0){
      return '';
    }
    return this.variants[this.selectedVariantIndex].name;
  }
  
  public handleSelection(idx) : void {
    this.selectedVariantIndex = idx;
    this.selected.emit(this.selectedVariantIndex)
  }

  public handleAmountChange(count:number) :void {
    this.count = count;
  }

  public handleConfirm () :void {
    if(this.selectedVariantIndex < 0){
      return ;
    }
    this.formSubmitted.emit({
      variant : this.variants[this.selectedVariantIndex],
      count : this.count
    });
    this.dialogService.close();
  }
  
}
