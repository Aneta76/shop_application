import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ProductsComponent} from './admin-panel/products/products.component';
import {ProductsResolve} from './shared/resolve/product.resolve';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'products',
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
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})


export class AppRouting {
}
