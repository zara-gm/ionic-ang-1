import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _userIsAuthenticated = new BehaviorSubject<boolean>(false);

  get userIsAuthenticated() {
    return this._userIsAuthenticated.asObservable(); // Return observable for subscription
  }

  constructor() { }

  async login(): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this._userIsAuthenticated.next(true); // Change auth state
        resolve(true);
      }, 1000);
    });
  }

  logout() {
    this._userIsAuthenticated.next(false); // Change auth state to logged out
  }
}
