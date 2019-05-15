import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProductsComponent} from './admin-panel/products/products.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {ProductsResolve, ProductsResolveByCategory} from './shared/resolve/product.resolve';
import {RegisterComponent} from './register/register.component';
import {UserPanelComponent} from './user-panel/user-panel.component';
import {ContactComponent} from './contact/contact.component';
import {MenuComponent} from './menu/menu.component';
import {CategoriesResolver} from './shared/resolve/category.resolve';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {ProductCategoriesComponent} from './admin-panel/product-categories/product-categories.component';
import {ProductsByCategoryComponent} from './admin-panel/products-by-category/products-by-category.component';
import {AccountComponent} from './user-panel/account/account.component';
import {UserResolve} from './shared/resolve/user.resolve';
import {EditUserComponent} from './user-panel/edit-user/edit-user.component';

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
    path: 'menu',
    component: MenuComponent,
    children: [
      {
        path: 'categories',
        component: ProductCategoriesComponent,
        resolve: {
          productCategories: CategoriesResolver,
          products: ProductsResolve
        },
      },
      {
        path: 'categories/:id',
        component: ProductsByCategoryComponent,
        resolve: {
          productsByCategory: ProductsResolveByCategory,
          productCategories: CategoriesResolver
        }
      },
      {
        path: '**',
        redirectTo: 'categories',
        pathMatch: 'prefix'
      }
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'user-panel',
    component: UserPanelComponent,
    children: [
      {
        path: 'account',
        component: AccountComponent,
        resolve: {
          userData: UserResolve
        }
      },
      {
        path: 'edit',
        component: EditUserComponent,
        resolve: {
          userData: UserResolve
        }
      },
    ]
  },
  {
    path: 'admin-panel',
    component: AdminPanelComponent,
    children: [
      {
        path: 'products',
        component: ProductsComponent,
        resolve: {
          products: ProductsResolve,
        }
      },
      {
        path: 'account',
        component: AccountComponent,
        resolve: {
          userData: UserResolve
        }
      },
      {
        path: '**',
        redirectTo: 'account',
        pathMatch: 'prefix'
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRouting {
}
