import {OrderElementModel} from './order-element.model';
import {RegisterUserModel} from './register-user.model';

export class Cartmodel {
  orderElement: Array<OrderElementModel> = [];
  user: RegisterUserModel = null;
}
