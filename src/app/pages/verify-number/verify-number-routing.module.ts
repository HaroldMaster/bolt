import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifyNumberComponent } from './verify-number.component';

const routes: Routes = [
  {path:'', component:VerifyNumberComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerifyNumberRoutingModule { }
