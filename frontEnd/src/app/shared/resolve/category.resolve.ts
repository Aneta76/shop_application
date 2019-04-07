import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {ProductCategoryService} from '../service/productCategory.service';

@Injectable()
export class CategoriesResolver implements Resolve <any> {

  constructor(private productCategoryService: ProductCategoryService) {
  }

  resolve() {
    return this.productCategoryService.getCategories();
  }
}

@Injectable()
export class CategoryResolver implements Resolve <any> {

  constructor(private productCategoryService: ProductCategoryService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.productCategoryService.getCategory(route.params['id']);
  }

}
