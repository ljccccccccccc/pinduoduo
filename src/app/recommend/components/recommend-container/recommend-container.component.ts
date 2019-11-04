import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/domain';
import { HomeService } from 'src/app/home/services';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-recommend-container',
  templateUrl: './recommend-container.component.html',
  styleUrls: ['./recommend-container.component.less'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class RecommendContainerComponent implements OnInit {

  public ad$: Observable<any>;
  public products$ :Observable<Product[]>;  

  constructor(private service :HomeService) { }

  ngOnInit() {

    this.ad$ = this.service.getAdByTab('men').pipe(
      filter(ads => {console.log(ads);return ads.length > 0}),
      map(ads => {console.log(ads);return ads[0]}),
    )
    this.products$ = this.service.getProductsByTab('men')
    
  }

}
