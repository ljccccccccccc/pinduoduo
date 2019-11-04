import { Component, OnInit } from '@angular/core';
import { TabItem } from './shared/domain';
import { Observable } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { DialogService } from './dialog/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{

  constructor(private router : Router, private dialogService : DialogService){}

  public selectedIndex$ : Observable<number>;
  public handleTabSelect(tab : TabItem){
    console.log(tab.link);
    this.router.navigate([tab.link]);
  }

  ngOnInit(): void {
    this.selectedIndex$ = this.router.events
    .pipe(
      //filter 筛选符合条件的
      //map 变形
      filter(ev => ev instanceof NavigationEnd),
      map((ev : NavigationEnd) => {
        const arr = ev.url.split('/');
        return arr.length > 1 ? arr[1] : 'home';
      }),
      map(path => this.getSelectedIndex(path))
    )
  }

  getSelectedIndex (tab :string) {
    return tab === 'recommend' 
    ? 1 
    : tab === 'category' 
    ? 2 
    : tab === 'chat' 
    ? 3 
    : tab === 'my' 
    ? 4 
    : 0;
  }

  removeDialog(){
   this.dialogService.close(); 
  }
}
