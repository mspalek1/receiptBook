import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective{
    @HostBinding('class.open') isOpen = false;

    @HostListener('document:click', ['$event']) toggleOpen1(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
      }

    @HostListener('click') toggleOpen(){
        //this.isOpen = !this.isOpen;
    }

    constructor(private elRef: ElementRef) {}
}