import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../../shared/model/product.model';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../shared/service/product.service';


@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrls: ['./../products/products.component.css'],
})
export class ProductsByCategoryComponent implements OnInit {
  private productsByCategory: Array<ProductModel> = [];

  constructor(private productService: ProductService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.productsByCategory = data['productsByCategory'];
    });
  }
}
