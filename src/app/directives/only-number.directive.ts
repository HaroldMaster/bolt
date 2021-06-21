import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[OnlyNumber]',
})
export class OnlyNumberDirective {
  constructor(private el: ElementRef) {}

  @Input() OnlyNumber!: boolean;

  @HostListener('keypress', ['$event']) onKeypress(event: any) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
