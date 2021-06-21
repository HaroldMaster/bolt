import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlyNumberDirective } from './only-number.directive';
import { PasteOnlyNumbersDirective } from './paste-only-numbers.directive';



@NgModule({
  declarations: [
    OnlyNumberDirective,
    PasteOnlyNumbersDirective
  ],
  exports: [
    OnlyNumberDirective,
    PasteOnlyNumbersDirective
  ]
})
export class CustomDirectivesModule { }
