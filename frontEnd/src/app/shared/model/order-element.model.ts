import {ProductModel} from './product.model';

export class OrderElementModel {
  product: ProductModel = new ProductModel();
  quantity: number = null;
}
