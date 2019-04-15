import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {ProductService} from '../service/product.service';

@Injectable()
export class ProductsResolve implements Resolve<any> {

  constructor(private productService: ProductService) {
  }

  resolve() {
    return this.productService.getProducts();
  }
}

@Injectable()
export class ProductResolve implements Resolve<any> {

  constructor(private productService: ProductService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    /* tslint:disable:no-string-literal */
    return this.productService.getProduct(route.params['id']);
    /* tslint:enable:no-string-literal */
  }
}

@Injectable()
export class ProductsResolveByCategory implements Resolve<any> {

  constructor(private productService: ProductService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.productService.getProductsByCategoryId(route.params['id']);
  }
}
