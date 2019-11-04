import { Component, OnInit, Input } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.less']
})
export class CountDownComponent implements OnInit {

  public countDown$ : Observable<any>;
  private _MS_PER_SECOND : number = 1000;

  @Input() startDate:Date = new Date();
  @Input() futureDate: Date;

  constructor() { }

  ngOnInit() {
    this.countDown$ = this.getCountDownObservable(this.startDate, this.futureDate);
  }

  private getCountDownObservable (startDate:Date , futureDate:Date){
    return interval(1000).pipe(
      map(elapse => this.diffInSec(startDate,futureDate) - elapse),
      takeWhile(gap => gap >= 0),//当表达式为真，过滤并结束流
      //filter不会结束这个流,只是过滤
      map(sec => ({
        day : Math.floor(sec/3600/24),
        hour : Math.floor(sec / 3600 % 24),
        minute : Math.floor(sec / 60 % 60),
        second : Math.floor(sec % 60)
      })),
      map(({hour,minute,second}) => `${hour}:${minute}:${second}`)
    )
  }

  private diffInSec = (start : Date , future : Date) : number => {
    const diff = future.getTime() - start.getTime();//毫秒差
    return Math.floor(diff/this._MS_PER_SECOND);
  }

}
