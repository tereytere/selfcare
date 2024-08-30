import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

type RegisterBody = {
  name: string;
  email: string;
  about?: string;
  password: string;
  location: string;
  role: 'admin' | 'user';
  image?: string;
  routines?: string[];
}

type LoginBody = {
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = 'http://localhost:5000/';

  private httpClient = inject(HttpClient);

  register(body: RegisterBody) {
    return lastValueFrom(this.httpClient.post<{ success: string }>(this.baseUrl + '/user/add', body))
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

}
