import {Component, OnInit} from '@angular/core';
import {OrderElementModel} from '../shared/model/order-element.model';
import {Cartmodel} from '../shared/model/cart-model.model';
import {CartService} from '../shared/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Array<OrderElementModel> = [];
  orderElement: OrderElementModel = new OrderElementModel();
  cart: Cartmodel = new Cartmodel();

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.items = this.cartService.orderElementList;
  }
}
