import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductContainerComponent } from './components/product-container/product-container.component';
import { GroupShortListComponent } from './components/group-short-list/group-short-list.component';
import { GroupItemComponent } from './components/group-item/group-item.component';
import { ProductVariantDialogComponent } from './components/product-variant-dialog/product-variant-dialog.component';
import { ProductAmountComponent } from './components/product-amount/product-amount.component';


@NgModule({
  declarations: [
    ProductContainerComponent, 
    GroupShortListComponent, 
    GroupItemComponent,
    ProductVariantDialogComponent,
    ProductAmountComponent
  ],
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
  exports:[
    ProductContainerComponent,
    GroupShortListComponent, 
    GroupItemComponent,
    ProductAmountComponent
  ],
  entryComponents : [
    ProductVariantDialogComponent]
})
export class ProductModule { }
