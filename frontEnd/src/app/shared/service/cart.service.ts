import {Injectable} from '@angular/core';
import {OrderElementModel} from '../model/order-element.model';
import {Cartmodel} from '../model/cart-model.model';
import {ProductModel} from '../model/product.model';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  orderElement: OrderElementModel = new OrderElementModel();
  cart: Cartmodel = new Cartmodel();
  orderElementList: Array<OrderElementModel> = [];

  constructor() {
  }

  addProductToCart(product: ProductModel) {
    if (localStorage.getItem('orderElementList')) {
      this.orderElementList = JSON.parse(localStorage.getItem('orderElementList'));
    }
    this.orderElement.product = product;
    this.orderElement.quantity = 1;
    this.orderElementList.push(this.orderElement);
    localStorage.setItem('orderElementList', JSON.stringify(this.orderElementList));
  }
}
