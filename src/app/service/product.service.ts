import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../shared/interface/product.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = 'https://fakestoreapi.com';
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/products`);
  }
}
