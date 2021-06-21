import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[PasteOnlyNumbers]'
})
export class PasteOnlyNumbersDirective {

  constructor() { }
  @Input() PasteOnlyNumbers!: boolean;

  @HostListener('paste', ['$event']) onPaste(event: any) {
    if (event.clipboardData.getData('text').match(/[^\d]/)) {
      event.preventDefault();
    }
  }

}
