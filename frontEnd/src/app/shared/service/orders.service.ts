import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cartmodel} from '../model/cart-model.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class OrdersService {

  cart: Cartmodel = new Cartmodel();

  constructor(private http: HttpClient) {
  }

  public getOrder(id: number): Observable<Cartmodel> {
    return this.http.get('/api/orders/all/' + id).pipe(map((response: Cartmodel) => {
        return response;
      }
    ));
  }

  public getAllOrders(): Observable<Array<Cartmodel>> {
    return this.http.get('/api/orders/all').pipe(map((response: Array<Cartmodel>) => {
        return response;
      }
    ));
  }

  public getOrderByUser(id: number): Observable<Array<Cartmodel>> {
    return this.http.get('/api/orders/byUser/' + id).pipe(map((response: Array<Cartmodel>) => {
        return response;
      }
    ));
  }
}
