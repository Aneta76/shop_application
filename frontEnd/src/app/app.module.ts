import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProductsComponent } from './admin-panel/products/products.component';
import { ProductCategoriesComponent } from './admin-panel/product-categories/product-categories.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { MainComponent } from './layout/main/main.component';
import {AppRouting} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {ProductService} from './shared/service/product.service';
import {ProductsResolve} from './shared/resolve/product.resolve';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    MainComponent,
    ProductsComponent,
    ProductCategoriesComponent,
    AdminPanelComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpClientModule,
  ],
  providers: [ProductService, ProductsResolve],
  bootstrap: [HomeComponent]
})
export class AppModule { }
