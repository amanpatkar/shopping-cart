import { Injectable } from '@angular/core';
import { cartItem } from './cart.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  serviceUrl = 'http://localhost:3000';
  newServiceUrl = 'https://fakestoreapi.com'
  constructor(private http:HttpClient) { }

  addToList(form:cartItem){
    return this.http.post<cartItem>(`${this.serviceUrl}/cartItem`,form)
  }

  getAllProductList(){
    return this.http.get(`${this.newServiceUrl}/products`)
  }
}
