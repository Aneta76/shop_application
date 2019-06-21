import {Injectable} from '@angular/core';
import {OrderElementModel} from '../model/order-element.model';
import {Cartmodel} from '../model/cart-model.model';
import {ProductService} from './product.service';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  orderElement: OrderElementModel = new OrderElementModel();
  cart: Cartmodel = new Cartmodel();
  orderElementList: Array<OrderElementModel> = [];

  constructor(private productService: ProductService) {
  }

  addProductToCart(id: number) {
    this.productService.getProduct(id).subscribe(product => this.orderElement.product = product);
    this.orderElement.quantity = 1;
    this.orderElementList.push(this.orderElement);
  }

  getOrderElement(): OrderElementModel {
    console.log('getOrderEle', this.orderElement.product);
    return this.orderElement;
  }
}
