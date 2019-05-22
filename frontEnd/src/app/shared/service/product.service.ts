import {Injectable} from '@angular/core';
import {ProductModel} from '../model/product.model';
import {HttpClient} from '@angular/common/http';
import {map, startWith} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private products: Array<ProductModel> = [];
  private productsStream: Subject<Array<ProductModel>> = new Subject();
  private productsByCategory: Array<ProductModel> = [];
  private product: ProductModel;

  constructor(private http: HttpClient) {
  }

  public getProducts(): Observable<Array<ProductModel>> {
    return this.http.get('/api/products/all').pipe(map((response: Array<ProductModel>) => {
      this.products = response;
      this.productsStream.next(this.products);
      return this.products;
    }));
  }

  public getProduct(id: number): Observable<ProductModel> {
    return this.http.get('/api/products/all/' + id).pipe(map((response: ProductModel) => {
      return response;
    }));
  }

  public getProductsByCategoryId(id: number): Observable<Array<ProductModel>> {
    return this.http.get('/api/products/categories/' + id).pipe(map((response: Array<ProductModel>) => {
      this.productsByCategory = response;
      return this.productsByCategory;
    }));
  }

  public getProductsStream(): Observable<Array<ProductModel>> {
    return this.productsStream.pipe(startWith(this.products));
  }

  public removeProduct(id: number) {
    return this.http.delete('/api/products/delete/' + id);

  }

  public saveProduct(product: ProductModel): Observable<ProductModel> {
    return this.http.post('/api/products/new', product).pipe(map((response: ProductModel) => {
      return response;
    }));
  }
}
