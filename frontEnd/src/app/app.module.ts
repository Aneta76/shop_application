import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {ProductsComponent} from './admin-panel/products/products.component';
import {ProductCategoriesComponent} from './admin-panel/product-categories/product-categories.component';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {AppRouting} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {ProductService} from './shared/service/product.service';
import {ProductResolve, ProductsResolve, ProductsResolveByCategory} from './shared/resolve/product.resolve';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './layout/navbar/navbar.component';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UserPanelComponent} from './user-panel/user-panel.component';
import {AuthService} from './shared/service/auth.service';
import {AppService} from './shared/service/app.service';
import {ContactComponent} from './contact/contact.component';
import {MenuComponent} from './menu/menu.component';
import {ProductCategoryService} from './shared/service/productCategory.service';
import {CategoriesResolver} from './shared/resolve/category.resolve';
import {ProductsByCategoryComponent} from './admin-panel/products-by-category/products-by-category.component';
import {UserService} from './shared/service/user.service';
import {AccountComponent} from './user-panel/account/account.component';
import {UserByIdResolve, UserResolve, UsersResolve} from './shared/resolve/user.resolve';
import {EditUserComponent} from './user-panel/edit-user/edit-user.component';
import {UsersComponent} from './admin-panel/users/users.component';
import {ProductListComponent} from './admin-panel/product-list/product-list.component';
import {ProductComponent} from './admin-panel/product/product.component';
import {LoginGuard} from './shared/guard/login.guard';
import {AdminGuard} from './shared/guard/admin.guard';
import {CartComponent} from './cart/cart.component';
import {CartService} from './shared/service/cart.service';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductCategoriesComponent,
    AdminPanelComponent,
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    UserPanelComponent,
    ContactComponent,
    MenuComponent,
    ProductsByCategoryComponent,
    AccountComponent,
    EditUserComponent,
    UsersComponent,
    ProductListComponent,
    ProductComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouting,
    FormsModule
  ],
  providers: [ProductService, ProductsResolve, ProductResolve, AuthService, AppService, ProductCategoryService,
    CategoriesResolver, ProductsResolveByCategory, UserService, UserResolve, UsersResolve, UserByIdResolve, LoginGuard,
    AdminGuard, CartService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
