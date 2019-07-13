import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {ProductResolve, ProductsResolve, ProductsResolveByCategory} from './shared/resolve/product.resolve';
import {RegisterComponent} from './register/register.component';
import {UserPanelComponent} from './user-panel/user-panel.component';
import {ContactComponent} from './contact/contact.component';
import {MenuComponent} from './menu/menu.component';
import {CategoriesResolver} from './shared/resolve/category.resolve';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {ProductCategoriesComponent} from './admin-panel/product-categories/product-categories.component';
import {ProductsByCategoryComponent} from './admin-panel/products-by-category/products-by-category.component';
import {AccountComponent} from './user-panel/account/account.component';
import {UserByIdResolve, UserResolve, UsersResolve} from './shared/resolve/user.resolve';
import {EditUserComponent} from './user-panel/edit-user/edit-user.component';
import {ManageUsersComponent} from './admin-panel/manage-users/manage-users.component';
import {ManageProductsComponent} from './admin-panel/manage-products/manage-products.component';
import {AddNewProductComponent} from './admin-panel/add-new-product/add-new-product.component';
import {AdminGuard} from './shared/guard/admin.guard';
import {LoginGuard} from './shared/guard/login.guard';
import {CartComponent} from './cart/cart.component';
import {OrdersComponent} from './user-panel/orders/orders.component';
import {OrderSuccessComponent} from './cart/order-success/order-success.component';
import {OrdersByUserIdResolve} from './shared/resolve/orders.resolve';

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
    path: 'cart',
    component: CartComponent,
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
    canActivate: [LoginGuard],
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
      {
        path: 'orders/:id',
        component: OrdersComponent,
        resolve: {
          ordersByUserId: OrdersByUserIdResolve,
        }
      },
      {
        path: 'success',
        component: OrderSuccessComponent,
      },
    ]
  },
  {
    path: 'admin-panel',
    component: AdminPanelComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: 'products',
        component: ManageProductsComponent
      },
      {
        path: 'product',
        component: AddNewProductComponent,
      },
      {
        path: 'products/edit/:id',
        component: AddNewProductComponent,
        resolve: {
          product: ProductResolve
        }
      },
      {
        path: 'products/delete/:id',
        component: ManageProductsComponent,
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
        path: 'users',
        component: ManageUsersComponent,
      },
      {
        path: 'users/edit/:id',
        component: EditUserComponent,
        resolve: {
          userData: UserByIdResolve
        }
      },
      {
        path: 'users/delete/:id',
        component: ManageUsersComponent,
        resolve: {
          users: UsersResolve,
        }
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRouting {
}
