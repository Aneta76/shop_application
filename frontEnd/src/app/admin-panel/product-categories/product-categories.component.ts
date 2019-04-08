import { Component, OnInit } from '@angular/core';
import {ProductCategoryModel} from '../../shared/model/product-category.model';
import {ProductCategoryService} from '../../shared/service/productCategory.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./../../app.component.css']
})
export class ProductCategoriesComponent implements OnInit {

  productCategories: Array<ProductCategoryModel> = [];

  constructor(private productCategoryService: ProductCategoryService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    /* tslint:disable:no-string-literal */
    this.productCategories = this.route.snapshot.data['productCategories'];
    /* tslint:enable:no-string-literal */
  }

}
