import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifyNumberComponent } from './pages/verify-number/verify-number.component';

const routes: Routes = [
  {path: '', component: VerifyNumberComponent},
  {path:'enter-code', loadChildren: () => import('./pages/enter-code/enter-code.module').then(m => m.EnterCodeModule)},
  {path: 'home', loadChildren: () => import('./pages/home-screen/home-screen.module').then(m => m.HomeScreenModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
