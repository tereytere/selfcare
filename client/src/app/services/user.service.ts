import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { User } from '../interfaces/user.interface';
import { tap } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { ReviewService } from './review.service';

type LoginBody = {
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private router = inject(Router);

  private baseUrl = environment.BASE_URL;
  private httpClient = inject(HttpClient);
  private tokenKey = 'token';

  private reviewService = inject(ReviewService);

  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  async handleExpiredToken() {
    this.setToken(null);
    await Swal.fire({
      title: 'Sesión expirada',
      text: 'Tu sesión ha expirado, por favor vuelve a iniciar sesión',
      icon: 'error'
    });
    this.router.navigateByUrl('/login');
  }

  fetchAndSetUser() {
    const token = this.getToken();
    if (token) {
      const decodedToken = this.decodeToken(token);
      this.getById(decodedToken.id).then(response => {
        this.userSubject.next(response.data);
      }).catch(error => {
        console.error('Failed to fetch user:', error);
        if (error.status === 401) {
          this.handleExpiredToken();
        }
      });
    }
  }

  register(body: any) {
    return lastValueFrom(this.httpClient.post<{ message: string, data: User }>(this.baseUrl + '/user/add', body))
  }

  login(body: LoginBody) {
    return lastValueFrom(this.httpClient.post<{ message: string, token: string }>(this.baseUrl + '/login', body).pipe(
      tap(response => {
        this.setToken(response.token);
        this.fetchAndSetUser();
      })
    ));
  }

  setToken(token: string | null): void {
    if (token) {
      localStorage.setItem(this.tokenKey, token); // Almacena el token recibido
    } else {
      localStorage.removeItem(this.tokenKey); // Elimina el token
      this.userSubject.next(null);
    }
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey); // Obtiene el token de localStorage
  }

  decodeToken(token: string): any {
    try {
      return JSON.parse(atob(token.split('.')[1])); // Decodifica el token obtenido
    } catch (error) {
      console.error('Failed to decode token:', error);
      throw error;
    }
  }

  isLogged(): boolean {
    return this.getToken() !== null;
  }

  isAdmin(): boolean {
    const token = this.getToken();
    if (token) {
      try {
        const decodedToken = this.decodeToken(token);
        return decodedToken.role === 'admin';
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
    return false;
  }

  isTokenExpired(token: string): boolean {
    const decodedToken = this.decodeToken(token);
    const currentTime = Math.floor(Date.now() / 1000);
    return decodedToken.exp < currentTime;
  }

  getById(id: string) {
    return lastValueFrom(
      this.httpClient.get<{ message: string, data: User }>(`${this.baseUrl}/user/${id}`, this.createHeaders())
    );
  }

  async getReviewsForCurrentUser() {
    const token = this.getToken();
    if (token) {
      const decodedToken = this.decodeToken(token);
      try {
        const response = await this.reviewService.getReviewsByUserId(decodedToken.id);
        return response.data;
      } catch (error) {
        console.error('Failed to fetch user reviews:', error);
      }
    }
    return [];
  }

  update(id: string, routine: User) {
    return lastValueFrom(
      this.httpClient.put<{ message: string, data: User }>(`${this.baseUrl}/user/update/${id}`, routine, this.createHeaders())
    );
  }

  addRoutineToUser(idU: string, idR: string) {
    return lastValueFrom(
      this.httpClient.put<{ message: string, data: User }>(`${this.baseUrl}/user/routine/add/${idU}/${idR}`, {}, this.createHeaders())
    );
  }

  removeRoutineFromUser(idU: string, idR: string) {
    return lastValueFrom(
      this.httpClient.put<{ message: string, data: User }>(`${this.baseUrl}/routine/product/delete/${idU}/${idR}`, {}, this.createHeaders())
    );
  }

  getAll(pag: number, limit: number) {
    const params = { pag: pag.toString(), limit: limit.toString() };
    return lastValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/users`, { ...this.createHeaders(), params })
    );
  }

  getLocation() {
    return lastValueFrom(
      this.httpClient.get<{ message: string, data: string[] }>(`${this.baseUrl}/location`))
  }

  deleteById(id: string) {
    return lastValueFrom(
      this.httpClient.delete<{ message: string, data: User }>(`${this.baseUrl}/user/delete/${id}`, this.createHeaders())
    );
  }

  adminDeleteById(id: string) {
    return lastValueFrom(
      this.httpClient.delete<{ message: string, data: User }>(`${this.baseUrl}/user/admindelete/${id}`, this.createHeaders())
    );
  }

  createHeaders() {
    const token = this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token ? `Bearer ${token}` : ''
      })
    };
    return httpOptions;
  }

}
