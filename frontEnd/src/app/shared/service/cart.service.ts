import {Injectable} from '@angular/core';
import {OrderElementModel} from '../model/order-element.model';
import {Cartmodel} from '../model/cart-model.model';
import {ProductModel} from '../model/product.model';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  orderElement: OrderElementModel = new OrderElementModel();
  cart: Cartmodel = new Cartmodel();
  orderElementList: Array<OrderElementModel> = [];
  isNotFound: boolean;

  constructor(private http: HttpClient) {
  }

  addProductToCart(product: ProductModel) {
    this.isNotFound = true;
    if (localStorage.getItem('orderElementList')) {
      this.orderElementList = JSON.parse(localStorage.getItem('orderElementList'));
    }
    for (let i = 0; i < this.orderElementList.length; i++) {
      if (this.orderElementList[i].product.id === product.id) {
        this.orderElementList[i].quantity = this.orderElementList[i].quantity + product.count;
        this.isNotFound = false;
      }
    }
    if (this.isNotFound) {
      this.orderElement.product = product;
      this.orderElement.quantity = product.count;
      this.orderElementList.push(this.orderElement);
    }
    localStorage.setItem('orderElementList', JSON.stringify(this.orderElementList));
  }

  increaseQuantity(product: ProductModel) {
    product.count = product.count + 1;
    this.orderElement.quantity = product.count + 1;
    return product.count;
  }

  decreaseQuantity(product: ProductModel) {
    product.count = product.count - 1;
    this.orderElement.quantity = product.count - 1;
    return product.count;
  }

  clearCart() {
    this.orderElementList = [];
    localStorage.removeItem('orderElementList');
  }

  saveOrder(cart: Cartmodel) {
    return this.http.post('/api/orders/new', cart).pipe(map((response: Cartmodel) => {
      return response;
    })).subscribe(data => console.log('order placed'));
  }

  checkIfempty(): boolean {
    if (this.orderElementList.length === 0) {
      return true;
    }
    return false;
  }
}
