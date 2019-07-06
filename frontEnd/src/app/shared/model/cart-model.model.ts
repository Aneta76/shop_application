import {OrderElementModel} from './order-element.model';
import {RegisterUserModel} from './register-user.model';

export class Cartmodel {
  orderElements: Array<OrderElementModel> = [];
  user: RegisterUserModel = null;
  orderPlaceTime: Date = null;
}
