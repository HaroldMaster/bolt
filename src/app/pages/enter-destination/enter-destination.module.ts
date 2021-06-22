import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnterDestinationRoutingModule } from './enter-destination-routing.module';
import { EnterDestinationComponent } from './enter-destination.component';
import { DestinationComponent } from 'src/app/components/destination/destination.component';


@NgModule({
  declarations: [
    EnterDestinationComponent,
    DestinationComponent
  ],
  imports: [
    CommonModule,
    EnterDestinationRoutingModule
  ]
})
export class EnterDestinationModule { }
