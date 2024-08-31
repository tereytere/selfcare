import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { User } from '../interfaces/user.interface';

type RegisterBody = {
  name: string;
  email: string;
  about?: string;
  password: string;
  location: string;
  image?: string;

}

type LoginBody = {
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = environment.BASE_URL;

  private httpClient = inject(HttpClient);

  register(body: RegisterBody) {
    return lastValueFrom(this.httpClient.post<{ message: string, data: User }>(this.baseUrl + '/user/add', body))
  }

  login(body: LoginBody) {
    return lastValueFrom(this.httpClient.post<{ success: string, token: string }>(this.baseUrl + '/login', body))
  }

  isLogged() {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  isAdmin() {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        return decodedToken.role === 'admin';
      } catch (error) {
        console.error('Error decoding token:', error);
        return false;
      }
    } else {
      return false;
    }
  }

  getById(id: string) {
    return lastValueFrom(
      this.httpClient.get<{ message: string, data: User }>(`${this.baseUrl}/user/${id}`, this.createHeaders())
    );
  }

  update(id: string, routine: User) {
    return lastValueFrom(
      this.httpClient.put<{ message: string, data: User }>(`${this.baseUrl}/user/update/${id}`, routine, this.createHeaders())
    );
  }

  addRoutineToUser(idU: string, idR: string) {
    return lastValueFrom(
      this.httpClient.put<{ message: string, data: User }>(`${this.baseUrl}/routine/product/add/${idU}/${idR}`, {}, this.createHeaders())
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
      this.httpClient.get<any>(this.baseUrl + '/users', { ...this.createHeaders(), params })
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

  private createHeaders() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('auth_token')!
      })
    };
    return httpOptions;
  }

}
