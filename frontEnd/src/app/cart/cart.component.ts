import {Component, OnInit} from '@angular/core';
import {OrderElementModel} from '../shared/model/order-element.model';
import {Cartmodel} from '../shared/model/cart-model.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./../admin-panel/products/products.component.css']
})
export class CartComponent implements OnInit {
  items: Array<OrderElementModel> = [];
  cart: Cartmodel = new Cartmodel();

  constructor() {
  }

  ngOnInit() {
    JSON.parse(localStorage.getItem('orderElementList'));
  }

  removeProduct(index: number) {
    this.items.splice(index, 1);
  }

}
