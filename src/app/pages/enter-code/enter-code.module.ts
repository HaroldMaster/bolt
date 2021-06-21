import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnterCodeRoutingModule } from './enter-code-routing.module';
import { EnterCodeComponent } from './enter-code.component';
import { NumberInputComponent } from 'src/app/components/number-input/number-input.component';
import { CustomDirectivesModule } from 'src/app/directives/custom-directives.module';
import {  ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EnterCodeComponent,
    NumberInputComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EnterCodeRoutingModule,
    CustomDirectivesModule,

  ]
})
export class EnterCodeModule { }
