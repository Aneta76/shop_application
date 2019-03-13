import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../../shared/model/product.model';
import {ProductService} from '../../shared/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<ProductModel> = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(productService => {
      this.products = productService;
    });
  }
}
