import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PageInterface, UserInterface } from '../../../interfaces';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {
  }

  fetchUsers(page): Observable<PageInterface> {
    return this.http.get<PageInterface>('https://reqres.in/api/users?page=' + page);
  }

  fetchPaginationInfo(): Observable<PageInterface> {
    return this.http.get<PageInterface>('https://reqres.in/api/users?page=1');
  }

  fetchUserById(id: number): Observable<UserInterface> {
    return this.http.get<UserInterface>(`https://reqres.in/api/users/${id}`);
  }

}
