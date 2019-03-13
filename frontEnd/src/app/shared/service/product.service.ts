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

  constructor(private http: HttpClient) {
  }

  public getProducts(): Observable<Array<ProductModel>> {
    return this.http.get('/api/products/all').pipe(map((response: Array<ProductModel>) => {
      this.products = response;
      this.productsStream.next(this.products);
      return this.products;
    }));
  }

  // public getUserLists(email: string){
  //   return this.http.get('/api/list/' + email).pipe(map((response: Array<WordListModel>) => {
  //     this.lists = response;
  //     this.listsStream.next(this.lists);
  //     return this.lists;

  public getProduct(id: number): Observable<ProductModel> {
    return this.http.get('/api/products/all/' + id).pipe(map((response: ProductModel) => {
      return response;
    }));
  }

  public getProductsStream(): Observable<Array<ProductModel>> {
    return this.productsStream.pipe(startWith(this.products));
  }
}
