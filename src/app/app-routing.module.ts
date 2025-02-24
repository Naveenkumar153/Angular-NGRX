import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path:'counter',
    loadComponent: () => import('./components/counter/counter.component').then(m => m.CounterComponent),
  },
  {
    path:'blog',
    loadComponent: () => import('./pages/blog/blog.component').then(m => m.BlogComponent),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
