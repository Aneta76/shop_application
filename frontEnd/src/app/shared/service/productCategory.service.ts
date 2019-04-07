import {Injectable} from '@angular/core';
import {ProductCategoryModel} from '../model/product-category.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductModel} from '../model/product.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProductCategoryService {

  productCategories: Array<ProductCategoryModel> = [];

  constructor(private http: HttpClient) {
  }

  public getCategories(): Observable<Array<ProductCategoryModel>> {
    return this.http.get('/api/category/all').pipe(map((response: Array<ProductCategoryModel>) => {
      this.productCategories = response;
      return this.productCategories;
    }));
  }

  public getCategory(id: number): Observable<ProductCategoryModel> {
    return this.http.get('/api/category/all/' + id).pipe(map((response: ProductCategoryModel) => {
      return response;
    }));
  }
}
