import {Component, OnInit} from '@angular/core';
import {OrderElementModel} from '../shared/model/order-element.model';
import {Cartmodel} from '../shared/model/cart-model.model';
import {CartService} from '../shared/service/cart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['../menu/products-in-menu/products-in-menu.component.css', './../app.component.css']
})

export class CartComponent implements OnInit {
  items: Array<OrderElementModel> = [];
  cart: Cartmodel = new Cartmodel();

  constructor(private cartService: CartService,
              private router: Router) {
  }

  ngOnInit() {
    this.items = JSON.parse(localStorage.getItem('orderElementList'));
  }

  removeProduct(index: number) {
    this.items.splice(index, 1);
    localStorage.setItem('orderElementList', JSON.stringify(this.items));
  }

  placeOrder() {
    this.cart.orderElements = JSON.parse(localStorage.getItem('orderElementList'));
    this.cart.user = JSON.parse(localStorage.getItem('currentUser'));
    this.cartService.saveOrder(this.cart);
    this.cartService.clearCart();
    this.router.navigate(['/user-panel/success']);
  }

  ifEmpty(): boolean {
    return this.cartService.checkIfempty();
  }
}
