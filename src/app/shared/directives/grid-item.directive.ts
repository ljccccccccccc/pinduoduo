import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
    selector: '[appGridItem]'
})
export class GridItemDirective{
    @HostBinding('style.display') @Input() display = 'grid';
    @HostBinding('style.grid-template-areas') template = `'image' 'title'`;
    @HostBinding('style.place-items') placeItems = 'center';
    @HostBinding('style.width') width = '4rem';
}