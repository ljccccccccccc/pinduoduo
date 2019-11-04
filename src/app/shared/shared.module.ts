import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImageSliderComponent, ScrollableTabComponent, HorizontalGridComponent } from './components';
import { GridItemDirective, GridItemImageDirective, GridItemTitleDirective, TagDirective, AvatarDirective } from './directives';
import { FooterComponent } from './components/footer/footer.component';
import { VerticalGridComponent } from './components/vertical-grid/vertical-grid.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductTileComponent } from './components/product-tile/product-tile.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { CountDownComponent } from './components/count-down/count-down.component';
import { DialogModule } from '../dialog';



@NgModule({
  declarations: [
    ImageSliderComponent, 
    ScrollableTabComponent, 
    HorizontalGridComponent, 
    FooterComponent, 
    VerticalGridComponent, 
    ProductCardComponent, 
    ProductCardComponent,
    ProductTileComponent,
    BackButtonComponent,
    CountDownComponent, 
    GridItemDirective, 
    GridItemImageDirective, 
    GridItemTitleDirective, 
    TagDirective, 
    AvatarDirective, 
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    CommonModule, 
    FormsModule, 
    DialogModule,
    ImageSliderComponent, 
    ScrollableTabComponent, 
    HorizontalGridComponent, 
    FooterComponent, 
    VerticalGridComponent, 
    ProductCardComponent,
    ProductTileComponent,
    BackButtonComponent,
    CountDownComponent,
    GridItemDirective, 
    GridItemImageDirective, 
    GridItemTitleDirective, 
    TagDirective, 
    AvatarDirective
  ]
})
export class SharedModule { }
