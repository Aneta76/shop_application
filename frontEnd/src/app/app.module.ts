import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './admin-panel/products/products.component';
import { ProductCategoriesComponent } from './admin-panel/product-categories/product-categories.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { MainComponent } from './layout/main/main.component';
import {AppRouting} from './app-routing.module';

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
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
