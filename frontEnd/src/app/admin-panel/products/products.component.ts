import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductModel} from '../../shared/model/product.model';
import {ProductService} from '../../shared/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<ProductModel> = [];

  constructor(private route: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit() {
    this.products = this.route.snapshot.data['products'];
  }

  removeProduct(productId: number, index: number) {
    this.productService.removeProduct(productId).subscribe(() => {
      this.products.splice(index, 1);
    });
  }

}
