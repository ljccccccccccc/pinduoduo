import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { HomeDetailComponent } from './components/home-detail/home-detail.component';
import { HomeService } from './services';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [HomeContainerComponent, HomeDetailComponent],
  providers:[
    HomeService,
    HttpClientModule
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
