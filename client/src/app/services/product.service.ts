import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = environment.BASE_URL;

  private httpClient = inject(HttpClient);


  getAll(pag: number, limit: number) {
    let params = new HttpParams();
    params = params.append('pag', pag.toString());
    params = params.append('limit', limit.toString());
    return lastValueFrom(
      this.httpClient.get<any>(this.baseUrl + '/products')
    );
  }


  getById(id: string) {
    return lastValueFrom(
      this.httpClient.get<{ data: Product }>(`${this.baseUrl}/product/${id}`)
    );
  }


  addProduct(product: Product, imageFile: File) {
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('brand', product.brand);
    formData.append('category', product.category);
    formData.append('properties', product.properties);
    formData.append('shoplink', product.shoplink);
    formData.append('image', imageFile);

    return lastValueFrom(
      this.httpClient.post<{ message: string, data: Product }>(this.baseUrl + 'product/add', formData, this.createHeaders())
    );
  }


  updateProduct(id: string, product: Product, imageFile?: File) {
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('category', product.category);
    formData.append('properties', product.properties);
    formData.append('shoplink', product.shoplink);
    if (imageFile) {
      formData.append('image', imageFile);
    }

    return lastValueFrom(
      this.httpClient.put<{ message: string, data: Product }>(`${this.baseUrl}/product/update/${id}`, formData, this.createHeaders())
    );
  }


  deleteById(id: string) {
    return lastValueFrom(
      this.httpClient.delete<{ message: string, data: Product }>(`${this.baseUrl}/product/delete/${id}`, this.createHeaders())
    );
  }


  private createHeaders() {
    const token = localStorage.getItem('token')!
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
    return httpOptions;
  }
}
















