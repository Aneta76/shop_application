import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../../shared/model/product.model';
import {ProductService} from '../../shared/service/product.service';
import {ActivatedRoute} from '@angular/router';
import {AppService} from '../../shared/service/app.service';
import {CartService} from '../../shared/service/cart.service';
import {OrderElementModel} from '../../shared/model/order-element.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./../../app.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<ProductModel> = [];
  product: ProductModel = new ProductModel();
  orderElement: OrderElementModel = new OrderElementModel();

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private appService: AppService,
              private cartService: CartService) {
  }

  ngOnInit() {
    this.products = this.route.snapshot.data['products'];
  }

  checkIfOnline(): boolean {
    return this.appService.isLoggedIn();
  }

  plusQuantity(product: ProductModel) {
    if (product.count < 99) {
      this.cartService.increaseQuantity(product);
    }
  }

  minusQuantity(product: ProductModel) {
    if (product.count > 1) {
      this.cartService.decreaseQuantity(product);
    }
  }

  addToCart(product: ProductModel) {
    this.product = product;
    this.orderElement.product = product;
    // this.orderElement.quantity = ... wysylanie cart ze zmienionym quantity
    this.cartService.addProductToCart(this.product);
  }
}
