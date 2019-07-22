import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductModel} from '../../shared/model/product.model';
import {ProductService} from '../../shared/service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductCategoryModel} from '../../shared/model/product-category.model';
import {ProductCategoryService} from '../../shared/service/productCategory.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {
  @ViewChild('f') f: NgForm | undefined;
  product: ProductModel = new ProductModel();
  categories: Array<ProductCategoryModel> = [];

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private categoryService: ProductCategoryService,
              private router: Router) {
  }

  ngOnInit() {
    if (this.route.snapshot.data['product']) {
      this.product = this.route.snapshot.data['product'];
    }
    this.categoryService.getCategories().subscribe(data => this.categories = data);
  }

  public addNewProduct() {
    if (this.f.valid) {
      this.product.count = 1;
      this.productService.saveProduct(this.product).subscribe((data) => console.log('product added or updated'));
    }
    this.router.navigate(['admin-panel/products']);
  }

  public isNew(): boolean {
    if (!this.product.id) {
      return true;
    } else {
      return false;
    }
  }
}
