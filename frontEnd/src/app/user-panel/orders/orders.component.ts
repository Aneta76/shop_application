import {Component, OnInit} from '@angular/core';
import {RegisterUserModel} from '../../shared/model/register-user.model';
import {Cartmodel} from '../../shared/model/cart-model.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./../../app.component.css']
})
export class OrdersComponent implements OnInit {
  cart: Cartmodel = new Cartmodel();
  orders: Array<Cartmodel> = [];
  user: RegisterUserModel = new RegisterUserModel();

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.orders = data['ordersByUserId'];
    });
  }
}
