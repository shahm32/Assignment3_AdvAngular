import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: any = null;

  constructor() {}

  login(username: string, password: string): Observable<boolean> {
    // Simulate fetching user from backend
    if ((username === 'adminUser' && password === 'adminpassword') ||
        (username === 'memberUser' && password === 'password123')) {
      this.currentUser = { username, role: username === 'adminUser' ? 'admin' : 'member' };
      localStorage.setItem('token', 'dummy-token');
      return of(true);
    }
    return of(false);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  isInRole(role: string): boolean {
    return this.currentUser && this.currentUser.role === role;
  }

  logout(): void {
    localStorage.removeItem('token');
    this.currentUser = null;
  }
}
