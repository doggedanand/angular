import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from '../models/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = 'http://localhost:3000';
  constructor(private _http: HttpClient) { }


  getAllUser(): Observable<Iuser[]> {
    return this._http.get<Iuser[]>(`${this.baseUrl}/posts`);
  };

  addUser(user: Iuser): Observable<Iuser> {
    return this._http.post<Iuser>(`${this.baseUrl}/posts`, user);
  };

  removeUser(user: Iuser): Observable<Iuser> {
    return this._http.delete<Iuser>(`${this.baseUrl}/posts/${user.id}`);
  };

  getUserById(userId: any): Observable<Iuser> {
    return this._http.get<Iuser>(`${this.baseUrl}/posts/${userId}`);
  };

  updateUser(userID: number, user: Iuser): Observable<Iuser> {
    return this._http.put<Iuser>(`${this.baseUrl}/posts/${userID}`, user);
  };
}
