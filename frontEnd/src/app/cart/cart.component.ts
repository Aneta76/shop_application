import {Component, OnInit, ViewChild} from '@angular/core';
import {OrderElementModel} from '../shared/model/order-element.model';
import {Cartmodel} from '../shared/model/cart-model.model';
import {CartService} from '../shared/service/cart.service';
import {Router} from '@angular/router';
import {DeliveryAddress} from '../shared/model/deliveryAddress.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['../menu/products-in-menu/products-in-menu.component.css', './../app.component.css']
})

export class CartComponent implements OnInit {
  @ViewChild('f') f: NgForm | undefined;
  items: Array<OrderElementModel> = [];
  cart: Cartmodel = new Cartmodel();
  cartIsEmpty: boolean;
  delivery: DeliveryAddress = new DeliveryAddress();

  constructor(private cartService: CartService,
              private router: Router) {
  }

  ngOnInit() {
    this.items = JSON.parse(localStorage.getItem('orderElementList'));
  }

  removeProduct(index: number) {
    this.items.splice(index, 1);
    localStorage.setItem('orderElementList', JSON.stringify(this.items));
    if (this.items.length === 0) {
      this.cartIsEmpty = true;
    } else {
      this.cartIsEmpty = false;
    }
  }

  placeOrder() {
    if (this.f.valid) {
      this.cart.deliveryAddress = this.delivery;
      this.cart.orderElements = JSON.parse(localStorage.getItem('orderElementList'));
      this.cart.user = JSON.parse(localStorage.getItem('currentUser'));
      this.cartService.saveOrder(this.cart);
      this.cartService.clearCart();
      this.router.navigate(['/user-panel/success']);
    }

  }

  ifEmpty(): boolean {
    return this.cartService.checkIfempty();
  }

  addDeliveryAddress() {
    if (this.f.valid) {
    }
  }
}
