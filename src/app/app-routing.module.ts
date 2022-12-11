import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'card', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)},
  { path: '**', redirectTo: 'card'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
