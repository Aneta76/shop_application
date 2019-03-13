import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProductsComponent} from './admin-panel/products/products.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'api/products/all',
    component: ProductsComponent,
  },
  // {
  //   path: 'products/all',
  //   component: ProductsComponent,
  //   resolve: {
  //     products: ProductsResolve
  //   }
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRouting {
}
