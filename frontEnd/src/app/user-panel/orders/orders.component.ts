import {Component, OnInit} from '@angular/core';
import {Cartmodel} from '../../shared/model/cart-model.model';
import {ActivatedRoute} from '@angular/router';
import {OrderElementModel} from '../../shared/model/order-element.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./../../app.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Array<Cartmodel> = [];
  orderElements: Array<OrderElementModel> = [];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.orders = data['ordersByUserId'];
    });
  }
}
