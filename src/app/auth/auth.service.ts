import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _userIsAuthenticated = false;

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  constructor() { }

  async login(): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this._userIsAuthenticated = true;
        resolve(true);
      }, 1000); // Simulate network delay
    });
  }

  logout() {
    this._userIsAuthenticated = false;
  }
}
