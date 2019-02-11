import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProductsComponent} from './admin-panel/products/products.component';
import {MainComponent} from './layout/main/main.component';
import {ProductsResolve} from './shared/resolve/product.resolve';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'products/all',
    component: ProductsComponent,
    resolve: {
      products: ProductsResolve
    }
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})


export class AppRouting {
}
