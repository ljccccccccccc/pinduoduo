import { Component, OnInit, OnDestroy } from '@angular/core';
import { Tab } from 'src/app/shared/components';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services';
import { Subscription, Observable } from 'rxjs';
import { map ,filter } from 'rxjs/operators';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.less']
})
export class HomeContainerComponent implements OnInit , OnDestroy{

  constructor(private router:Router, private service: HomeService, private route:ActivatedRoute) { }


  selectedTabLink$ : Observable<string>;
  public topMenus;
  public sub : Subscription; //这里是为了取消oninit中的subscribe
  ngOnInit() {
    this.topMenus = this.service.getTabs().subscribe(data => {this.topMenus = data});
    this.selectedTabLink$ = this.route.firstChild.paramMap.pipe(
      filter(params => params.has('tabLink')),
      map(params => params.get('tabLink'))
    )
  }
  ngOnDestroy () {
    this.selectedTabLink$.subscribe();
  }
  handleTabSelected(selectedTab :Tab) {
    console.log(selectedTab.link);
    this.router.navigate(['home',selectedTab.link]);
  }

}
