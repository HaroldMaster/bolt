import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifyNumberComponent } from './pages/verify-number/verify-number.component';

const routes: Routes = [
  {path: '', component: VerifyNumberComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
