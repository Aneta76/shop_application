import {Injectable} from '@angular/core';
import {ProductModel} from '../model/product.model';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import {map, startWith} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private products: Array<ProductModel> = [];
  private productsStream: Subject<Array<ProductModel>> = new Subject();

  constructor(private http: HttpClient, private httpM: HttpClientModule) { }

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

  public getProductsStream(): Observable<Array<ProductModel>> {
    return this.productsStream.pipe(startWith(this.products));
  }
}
