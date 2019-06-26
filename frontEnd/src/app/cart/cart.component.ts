import {Component, OnInit} from '@angular/core';
import {OrderElementModel} from '../shared/model/order-element.model';
import {Cartmodel} from '../shared/model/cart-model.model';
import {CartService} from '../shared/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./../admin-panel/products/products.component.css']
})

export class CartComponent implements OnInit {
  items: Array<OrderElementModel> = [];
  cart: Cartmodel = new Cartmodel();

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.items = this.cartService.getCart();
  }

  removeProduct(index: number) {
    this.items.splice(index, 1);
    localStorage.setItem('orderElementList', JSON.stringify(this.items));
  }

  placeOrder() {
    this.items = this.cartService.getCart();
    this.cartService.saveOrder(this.items).subscribe(data => console.log ('placed order'));
    this.cartService.clearCart();
  }

}
