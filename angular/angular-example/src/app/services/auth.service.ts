import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  authenticated: boolean = false;

    constructor() {
    }
    
    isAuthenticated(): boolean {
      return this.authenticated;
    }
  
    login(): void {
      this.authenticated = true;
    }

    logout(): void {
      this.authenticated = false;
    }
  }