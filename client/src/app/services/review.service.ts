import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Review } from '../interfaces/review.inteface';


@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private baseUrl = environment.BASE_URL;

  private httpClient = inject(HttpClient);


  getAll(pag: number, limit: number) {
    let params = new HttpParams();
    params = params.append('pag', pag.toString());
    params = params.append('limit', limit.toString());
    return lastValueFrom(
      this.httpClient.get<any>(this.baseUrl + '/reviews')
    );
  }

  getById(id: string) {
    return lastValueFrom(
      this.httpClient.get<{ data: Review }>(`${this.baseUrl}/review/${id}`)
    );
  }

  getReviewsByUserId(userId: string) {
    return lastValueFrom(
      this.httpClient.get<{ data: Review[] }>(`${this.baseUrl}/review/user/${userId}`, this.createHeaders())
    );
  }

  addReview(review: Review, idU: string, idR: string) {
    return lastValueFrom(
      this.httpClient.post<{ message: string, data: Review }>(`${this.baseUrl}/review/add/${idU}/${idR}`, review, this.createHeaders())
    );
  }

  updateReview(review: Review, id: string) {

    return lastValueFrom(
      this.httpClient.put<{ message: string, data: Review }>(`${this.baseUrl}/review/update/${id}`, review, this.createHeaders())
    );
  }

  deleteById(id: string) {
    return lastValueFrom(
      this.httpClient.delete<{ message: string, data: Review }>(`${this.baseUrl}/review/delete/${id}`, this.createHeaders())
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
