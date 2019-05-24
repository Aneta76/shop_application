import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../../shared/model/product.model';
import {ProductService} from '../../shared/service/product.service';
import {ActivatedRoute} from '@angular/router';
import {ProductCategoryModel} from '../../shared/model/product-category.model';
import {ProductCategoryService} from '../../shared/service/productCategory.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: ProductModel = new ProductModel();
  categories: Array<ProductCategoryModel> = [];

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private categoryService: ProductCategoryService) {
  }

  ngOnInit() {
    if (this.route.snapshot.data['product']) {
      this.product = this.route.snapshot.data['product'];
    }
    this.categoryService.getCategories().subscribe(data => this.categories = data);
  }

  public addNewProduct() {
    this.productService.saveProduct(this.product).subscribe(data => console.log('product added or updated'));
  }

  public isNew(): boolean {
    if (!this.product.id) {
      return true;
    } else {
      return false;
    }
  }
}
