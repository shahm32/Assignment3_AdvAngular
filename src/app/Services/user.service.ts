import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'assets/users.json'; // Ensure this path is correct

  constructor(private http: HttpClient) {}

  getPersonList(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
}