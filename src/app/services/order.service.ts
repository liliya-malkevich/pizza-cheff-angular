import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  public addOrder(order:Order) {
    const param = {name:order.name,address:order.address,phone:order.phone};
    return this.http.post('https://pizza-cheff-demo.com/api/order', param);
  }
}
