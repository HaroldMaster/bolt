import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifyNumberComponent } from './verify-number.component';
import { PhoneInputComponent } from '../../components/phone-input/phone-input.component';
import { ImageSelectComponent } from '../../components/image-select/image-select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VerifyNumberRoutingModule } from './verify-number-routing.module';
import { CustomDirectivesModule } from 'src/app/directives/custom-directives.module';

@NgModule({
  declarations: [
    VerifyNumberComponent,
    PhoneInputComponent,
    ImageSelectComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VerifyNumberRoutingModule,
    CustomDirectivesModule

  ]
})
export class VerifyNumberModule { }
