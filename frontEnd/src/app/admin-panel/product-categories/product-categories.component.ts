import {Component, OnInit} from '@angular/core';
import {ProductCategoryModel} from '../../shared/model/product-category.model';
import {ProductCategoryService} from '../../shared/service/productCategory.service';
import {ActivatedRoute} from '@angular/router';
import {ProductModel} from '../../shared/model/product.model';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./../../app.component.css']
})
export class ProductCategoriesComponent implements OnInit {

  productCategories: Array<ProductCategoryModel> = [];
  products: Array<ProductModel> = [];

  constructor(private productCategoryService: ProductCategoryService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    /* tslint:disable:no-string-literal */
    if (this.route.snapshot.data['productCategories']) {
      this.productCategories = this.route.snapshot.data['productCategories'];
    }
    this.products = this.route.snapshot.data['products'];
    /* tslint:enable:no-string-literal */
  }

}
