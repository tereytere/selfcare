import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Routine } from '../interfaces/routine.interface';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class RoutineService {

  private baseUrl = environment.BASE_URL;

  private httpClient = inject(HttpClient);


  create(routine: Routine) {
    return lastValueFrom(
      this.httpClient.post<{ message: string, data: Routine }>(this.baseUrl + '/routine/add', routine, this.createHeaders())
    );
  }


  getAll(pag: number, limit: number) {
    const params = { pag: pag.toString(), limit: limit.toString() };
    return lastValueFrom(
      this.httpClient.get<any>(this.baseUrl + '/routines', { ...this.createHeaders(), params })
    );
  }


  getById(id: string) {
    return lastValueFrom(
      this.httpClient.get<{ message: string, data: Routine }>(`${this.baseUrl}/routine/${id}`, this.createHeaders())
    );
  }


  update(id: string, routine: Routine) {
    return lastValueFrom(
      this.httpClient.put<{ message: string, data: Routine }>(`${this.baseUrl}/routine/update/${id}`, routine, this.createHeaders())
    );
  }


  deleteById(id: string) {
    return lastValueFrom(
      this.httpClient.delete<{ message: string, data: Routine }>(`${this.baseUrl}/routine/delete/${id}`, this.createHeaders())
    );
  }


  addProductToRoutine(idR: string, idP: string) {
    return lastValueFrom(
      this.httpClient.put<{ message: string, data: Routine }>(`${this.baseUrl}/routine/product/add/${idR}/${idP}`, {}, this.createHeaders())
    );
  }


  removeProductFromRoutine(idR: string, idP: string) {
    return lastValueFrom(
      this.httpClient.put<{ message: string, data: Routine }>(`${this.baseUrl}/routine/product/delete/${idR}/${idP}`, {}, this.createHeaders())
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



