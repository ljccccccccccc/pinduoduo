import { Directive, ElementRef, Renderer2, Input, OnInit, HostListener } from "@angular/core";

@Directive({
    selector: '[appGridItemImage]'
})
export class GridItemImageDirective implements OnInit{
    
  @Input() appGridItemImage = '2rem';
  @Input() fixMode = 'cover';
    //ElementRef 就是数组的包装类
    //rd2 操作文档
    constructor(private elr: ElementRef,private rd2 : Renderer2){
    }
    ngOnInit () {
        this.rd2.setStyle(this.elr.nativeElement,'grid-area','image');
        this.rd2.setStyle(this.elr.nativeElement,'width',this.appGridItemImage);
        this.rd2.setStyle(this.elr.nativeElement,'height',this.appGridItemImage);
        this.rd2.setStyle(this.elr.nativeElement,'object-fix',this.fixMode);
    }

    @HostListener('click',['$event.target']) 
    handelClick (ev) {
        console.log(ev);
    }
}