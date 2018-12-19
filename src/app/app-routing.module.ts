import { NgModule } from '@angular/core';
import {environment} from '../environments/environment';
import { Routes, RouterModule } from '@angular/router';
import { BlockDetailComponent } from './component/block-detail/block-detail.component';
import { TransactionDetailComponent } from './component/transaction-detail/transaction-detail.component';

const routes: Routes = [
  
  {path: 'block-detail', component: BlockDetailComponent},
  {path: 'trans-detail/:id', component: TransactionDetailComponent},
  { path: '', redirectTo: '/block-detail', pathMatch: 'full' },
  { path: '**', redirectTo: '/block-detail' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: environment.enableRouterTracing})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
