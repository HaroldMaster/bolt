import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterDestinationComponent } from './enter-destination.component';

const routes: Routes = [
  {path:'', component:EnterDestinationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnterDestinationRoutingModule { }
