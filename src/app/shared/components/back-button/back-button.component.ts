import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackButtonComponent implements OnInit {

  public float : boolean = true;

  constructor(private location : Location) { }

  ngOnInit() {
  }

  
  public get imageUrl() : string {
    return this.float ? 'assets/icons/back_light.png'
                      : 'assets/icons/back_dark.png'
  }
  

  public handleBack () {
    this.location.back();
  }

}
