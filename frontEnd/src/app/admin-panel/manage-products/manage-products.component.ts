import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../../shared/model/product.model';
import {ProductService} from '../../shared/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./../../app.component.css']
})
export class ManageProductsComponent implements OnInit {
  products: Array<ProductModel> = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => this.products = data);
  }

  removeProduct(id: number, index: number) {
    this.productService.removeProduct(id).subscribe(() => {
      this.products.splice(index, 1);
    });
  }

}
