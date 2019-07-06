import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {OrdersService} from '../service/orders.service';

@Injectable()
export class OrdersByUserIdResolve implements Resolve <any> {

  constructor(private ordersService: OrdersService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.ordersService.getOrderByUser(route.params['id']);
  }
}
