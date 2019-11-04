import { Directive, Input, HostBinding } from "@angular/core";

@Directive({
    selector: '[appGridItemTitle]'
})
export class GridItemTitleDirective{
    @HostBinding('style.grid-area') gridArea = 'title';
    @Input() @HostBinding('style.font-size') appGridItemTitle = '0.6rem';
}