import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, OnDestroy, Renderer2 } from '@angular/core';

export interface ImageSlider {
  imgUrl : string;
  link : string;
  caption : string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.less']
})
export class ImageSliderComponent implements OnInit,AfterViewInit {

  @Input() sliders : ImageSlider[] =[];
  @Input() sliderHeight : string = '160px';
  @Input() intervalBySeconds : number = 2;
  @ViewChild("imgSlider",{static:true}) imgSlider : ElementRef;
  selectedIndex: number;
  intervalId;
  constructor(private rd2:Renderer2) { }

  ngOnInit() {
    
  }

  ngAfterViewInit(): void {
    if(this.intervalBySeconds <= 0){
      return;
    }
    this.intervalId = setInterval(() => {
      console.log('interval');
      this.rd2.setProperty(this.imgSlider.nativeElement,'scrollLeft',
      ( this.getIndex(++this.selectedIndex) * this.imgSlider.nativeElement.scrollWidth)/this.sliders.length)
    }, this.intervalBySeconds * 1000)
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    clearInterval(this.intervalId);
  }

  getIndex(idx : number) : number {
    return idx >= 0 ?  idx % this.sliders.length : this.sliders.length - (Math.abs(idx) % this.sliders.length);
  }
  handleScroll(ev){
    const ratio = (ev.target.scrollLeft * this.sliders.length)/ev.target.scrollWidth;
    this.selectedIndex = Math.round(ratio);
  }
}
