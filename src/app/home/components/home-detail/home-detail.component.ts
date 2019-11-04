import { Component, OnInit } from '@angular/core';
import { Channel, ImageSlider } from 'src/app/shared/components';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services';
import { filter, map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/domain';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.less']
})
export class HomeDetailComponent implements OnInit {

  public selectedTabLink$ : Observable<string>;
  public imageSliders$ : Observable<any> ;
  public channels$ : Observable<any>;
  public ad$: Observable<any>;
  public products$ :Observable<Product[]>;

  constructor(private route : ActivatedRoute, private service:HomeService) { }

  ngOnInit() {

    this.imageSliders$  = this.service.getBanners();
    this.channels$ = this.service.getChannels();
    this.selectedTabLink$ = this.route.paramMap
    .pipe(
      filter(params => params.has('tabLink')),
      map(params => params.get("tabLink"))
    )

    this.ad$ = this.selectedTabLink$.pipe(
      switchMap(tab => this.service.getAdByTab(tab)),
      filter(ads => {console.log(ads);return ads.length > 0}),
      map(ads => {console.log(ads);return ads[0]}),
    )
    this.products$ = this.selectedTabLink$.pipe(
      switchMap(tab => this.service.getProductsByTab(tab))
    )
  }


}
