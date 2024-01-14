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
    return this._http.get<Iuser[]>(`${this.baseUrl}/get`);
  }

  addUser(user: Iuser): Observable<Iuser> {
    return this._http.post<Iuser>(`${this.baseUrl}/post`, user)
  }

}
