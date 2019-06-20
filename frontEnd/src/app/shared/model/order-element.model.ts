import {ProductModel} from './product.model';

export class OrderElement {
  product: ProductModel = new ProductModel();
  quantity: number = null;
}
