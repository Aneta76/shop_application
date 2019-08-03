import {Component, OnInit} from '@angular/core';
import {Cartmodel} from '../../shared/model/cart-model.model';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderElementModel} from '../../shared/model/order-element.model';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./../../app.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Array<Cartmodel> = [];
  orderElements: Array<OrderElementModel> = [];
  sum: number = 0;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private datepipe: DatePipe) {
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.orders = data['ordersByUserId'];
    });
  }

  sumUp(price: number, quantity: number) {
      this.sum = this.sum + (price * quantity);
  }

  clearSum() {
    this.sum = 0;
  }

  convertDate(date: Date): string {
    return this.datepipe.transform(date, 'medium');
  }

  back() {
    this.router.navigate(['/user-panel/']);
  }
}
