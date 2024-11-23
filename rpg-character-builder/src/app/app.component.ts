import { Component } from '@angular/core';
// Importing RouterLink
import { RouterLink, RouterOutlet } from '@angular/router';
// Importing CookieService and AuthService
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  // Importing RouterLink
  imports: [RouterOutlet, RouterLink],
  // Adding HTML and CSS
  template: `
  <div class="wrapper">
    <header class="banner">
      <img src="/assets/rpg-banner.png" alt="website banner for RPG" class="banner-img">
    </header>

     <div class="sign-in-container">
      @if (email) {
        <p>Welcome, {{ email }}!</p>
        <button (click)="signout()">Sign Out</button>
      } @else {
        <a routerLink="/signin" class="sign-in-link">Sign In</a>
      }
    </div>

    <main class="main-content">

      <nav class="navbar">
        <ul>
          <li><a routerLink="/">Home</a></li>
          <li><a routerLink="/create-character">Create Character</a></li>
          <li><a routerLink="/create-guild">Create Guild</a></li>
          <li><a routerLink="/character-faction">Create Faction</a></li>
          <li><a routerLink="/players">Players</a></li>
          <li><a routerLink="/signin">Sign In</a></li>
        </ul>
      </nav>

      <section class="content">
        <router-outlet />
      </section>
    </main>

    <footer class="footer">
      <nav class="footer-nav">
        <a routerLink="/">Home</a> |
        <a routerLink="/create-character">Create Character</a> |
        <a routerLink="/create-guild">Create Guild</a> |
        <a routerLink="/character-faction">Create Faction</a> |
        <a routerLink="/players">Players</a> |
        <a routerLink="/signin">Sign In</a>
      </nav>
      <p>&copy; RPG Character Builder Project by Angelica Gutierrez</p>
    </footer>
  </div>
`,
styles: [
  `
  .sign-in-container {
        text-align: right;
        padding-right: 20px;
        margin-top: 10px;
      }

      .sign-in-link {
        color: #000000;
        text-decoration: none;
        font-family: 'Lato', sans-serif;
      }

      .sign-in-link:hover {
        text-decoration: underline;
      }
  `
  ]
})

export class AppComponent {
   email?: string;
  constructor(private authService: AuthService, private cookieService:
    CookieService) {
  }
  // Determines if user is auth or not
  ngOnInit() {
    this.authService.getAuthState().subscribe((isAuth) => {
      if (isAuth) {
        this.email = this.cookieService.get('session_user');
      }
    });
  }
  // Signs out user
  signout() {
    this.authService.signout();
  }
}
