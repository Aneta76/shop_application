import {OrderElementModel} from './order-element.model';
import {RegisterUserModel} from './register-user.model';
import {DeliveryAddress} from './deliveryAddress.model';

export class Cartmodel {
  orderElements: Array<OrderElementModel> = [];
  user: RegisterUserModel = null;
  orderPlaceTime: Date = null;
  deliveryAddress: DeliveryAddress = new DeliveryAddress();
}
