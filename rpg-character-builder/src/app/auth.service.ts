// User interface
export interface User {
  empId: number;
  email: string;
  password: string;
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[];
  // Sets authState as BehaviorSubject
  private authState = new BehaviorSubject(<boolean>false);
  // Parameters for CookieService and Router module
  constructor(private cookieService: CookieService, private router: Router) {
    this.users = [
      {
        empId: 1007, email: 'wizardlywand@hogwarts.com', password: 'Alohomora123'
      },
      {
        empId: 1008, email: 'quidditchqueen@hogwarts.com', password: 'Qua le22'
      },
      {
        empId: 1009, email: 'potionmaster@hogwarts.com', password: 'Polyjuice99'
      },
      {
        empId: 1010, email: 'mugglemania@hogwarts.com', password: 'Dementor0'
      },
      {
        empId: 1011, email: 'spellbinder@hogwarts.com', password: 'Expelliarmus88'
      }
    ];
  }

  // Returns authState BehaviorSubject as observable
  getAuthState() {
    return this.authState.asObservable();
  }

  // Sign In
  // Check if user email and password match, if yes auth or not, do not auth
  signin(email: string, password: string) {
    const user = this.users.find(user => user.email === email && user.password=== password);
    if (user) {
      this.cookieService.set('session_user', email, 1);
      this.authState.next(true);
      return true;
    } else {
      this.authState.next(false);
      return false;
    }
  }

  // Sign out
  // Deletes cookieService, set authState to false, and redirect to signin
  signout() {
    this.cookieService.deleteAll();
    this.authState.next(false);
    this.router.navigate(['/signin']).then(() => { });
  }
}
