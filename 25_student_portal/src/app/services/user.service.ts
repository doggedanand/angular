import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  postUser(userData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/posts`, userData);
  };

  loginUser(loginData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/posts`, loginData);
  }

  getAllUserData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/posts`)
  }
  
  isLoggedInStatus() {
    return localStorage.getItem('user');
  }
}
