import {OrderElementModel} from './order-element.model';

export class Cartmodel {
  orderElement: Array<OrderElementModel> = [];
  orderTime: Date = new Date();
}
