import { Component } from '@angular/core';
// Importing RouterLink
import { RouterLink, RouterOutlet } from '@angular/router';

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
        <a href="#">Create Character</a> |
        <a href="#">Create Guild</a> |
        <a href="#">Create Faction</a> |
        <a href="#">Players</a> |
        <a href="#">Sign In</a>
      </nav>
      <p>&copy; RPG Character Builder Project by Angelica Gutierrez</p>
    </footer>
  </div>
`,
styles: [
  `
  `
  ]
})

export class AppComponent {
  title = 'rpg-character-builder';
}
