import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  login(username: String, password: String): boolean {
    if (username === 'hugo' && password === '123') {
      this.isAuthenticated = true;
      console.log("isAuthenticated");

      return true;
    }
    console.log("isAuthenticated");
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  register(username: String, password: String, confirmPassword: String): boolean {
    if (username === 'hugo' && password === '123' && confirmPassword === password) {
      return true;
    }
    return false;
  }
}
