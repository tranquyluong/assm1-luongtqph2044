import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Iproduct } from 'src/types/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = 'http://localhost:3000/products'
  constructor(private http : HttpClient) { }
  getproducts():Observable<Iproduct[]>{
    return this.http.get<Iproduct[]>(`${this.baseUrl}`)
  }
  removeproduct(id:number):Observable<any>{
    return this.http.delete(`${this,this.baseUrl}/${id}`)
  }
  addproducts(product:Iproduct):Observable<Iproduct>{
    return this.http.post<Iproduct>(`${this.baseUrl}` ,product)
  }
  updateproduct (product:Iproduct):Observable<Iproduct>{
    return this.http.put<Iproduct>(`${this.baseUrl}/${product.id}`,product)
  }
  getproductbyId(id:number|string):Observable<Iproduct>{
    return this.http.get<Iproduct>(`${this.baseUrl}/${id}`)
  }
}
