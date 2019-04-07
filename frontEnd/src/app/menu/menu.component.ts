import {Component, OnInit} from '@angular/core';
import {ProductCategoryModel} from '../shared/model/product-category.model';
import {ProductCategoryService} from '../shared/service/productCategory.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  productCategories: Array<ProductCategoryModel> = [];

  constructor(private productCategoryService: ProductCategoryService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.productCategories = this.route.snapshot.data['productCategories'];
  }

}
