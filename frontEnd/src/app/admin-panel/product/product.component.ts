import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../../shared/model/product.model';
import {ProductService} from '../../shared/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: ProductModel = new ProductModel();

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
  }

  public addNewProduct() {
    this.productService.saveProduct(this.product).subscribe(data => console.log('product added'));
  }

}
