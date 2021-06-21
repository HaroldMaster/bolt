import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifyNumberGuard } from 'src/app/guards/verify-number.guard';
import { EnterCodeComponent } from './enter-code.component';

const routes: Routes = [
  {path:'', component:EnterCodeComponent}//, canActivate:[VerifyNumberGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnterCodeRoutingModule { }
