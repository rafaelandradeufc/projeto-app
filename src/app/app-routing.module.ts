import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FundosComponent } from './fundos/fundos.component';
import { FundoDetailComponent } from './fundos/fundo-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/fundos', pathMatch: 'full' },
  { path: 'fundos', component: FundosComponent },
  { path: 'fundos/detalhes/:id', component: FundoDetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
