import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './admin-panel/products/products.component';
import { ProductCategoriesComponent } from './admin-panel/product-categories/product-categories.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { MainComponent } from './layout/main/main.component';
import {AppRouting} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {ProductService} from './shared/service/product.service';
import {ProductsResolve} from './shared/resolve/product.resolve';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductCategoriesComponent,
    AdminPanelComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpClientModule,
  ],
  providers: [ProductService, ProductsResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
