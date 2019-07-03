import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {PageInterface} from '../../../interfaces';


@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {
  }

  fetchUsers(page): Observable<any> {
    return this.http.get('https://reqres.in/api/users?page=' + page).pipe(map(response => {
      console.log(response);
    }));
  }

  fetchPaginationInfo(): Observable<PageInterface> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    return this.http.get<PageInterface>('https://reqres.in/api/users?page=1', httpOptions);
  }

  fetchUserById(id: number): Observable<any> {
    return this.http.get(`https://reqres.in/api/users/${id}`).pipe(map(response => {
      console.log(response);
    }));
  }

}
