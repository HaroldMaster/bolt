import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifyNumberComponent } from './verify-number.component';
import { PhoneInputComponent } from 'src/app/components/phone-input/phone-input.component';
import { ImageSelectComponent } from 'src/app/components/image-select/image-select.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    VerifyNumberComponent,
    PhoneInputComponent,
    ImageSelectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class VerifyNumberModule { }
