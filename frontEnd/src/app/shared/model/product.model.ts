import {ProductCategoryModel} from './product-category.model';

export class ProductModel {
  id: number = null;
  price: number = null;
  name: string = null;
  description: string = null;
  category: ProductCategoryModel = new ProductCategoryModel();
}
