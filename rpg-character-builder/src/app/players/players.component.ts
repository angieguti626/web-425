export interface PlayersItem {
  name: string;
  gender: string;
  class: string;
  faction: string;
  startingLocation: string;
  funFact: string;
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h1>Our Players</h1>
      <p>Explore our selection of players! Get inspired or start your storytelling here.</p>

      <ul class="players-container">
        @for (item of players; track item) {
          <li class="players-item">
            <div class="card">
              <h3>{{item.name}}</h3>
              <p>{{item.gender}}</p>
              <p>{{item.class }}</p>
              <p>{{item.faction}} </p>
              <p>{{item.startingLocation}} </p>
              <p>{{item.funFact}} </p>
            </div>
          </li>
        }
      </ul>

    </div>
  `,
  styles: `
  .players-container {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
      }

      .players-item {
        flex: 0 1 calc(33.33% - 20px);
        margin: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }

      .card {
        padding: 20px;
        background-color: white;
      }
  `
})
export class PlayersComponent {
  players: PlayersItem[];

  constructor() {
    this.players = [
      {
        "name": "Thorn",
        "gender": "Male",
        "class": "Warrior",
        "faction": "The Iron Brotherhood",
        "startingLocation": "Ironhold",
        "funFact": "Thorn once single-handedly defeated a dragon."
      },
      {
        "name": "Rose",
        "gender": "Female",
        "class": "Mage",
        "faction": "Celestial Corsairs",
        "startingLocation": "Coral",
        "funFact": "Rose always is up on the latest fashion trends even when she's in a fight."
      },
      {
        "name": "Vamp",
        "gender": "Other",
        "class": "Rogue",
        "faction": "Coral Conclave",
        "startingLocation": "Canta",
        "funFact": "Vamp's best friend is Belle. They communicate via mail."
      },
      {
        "name": "Belle",
        "gender": "Female",
        "class": "Warrior",
        "faction": "The Celestial Cartographers",
        "startingLocation": "Canta",
        "funFact": "Belle has a track record of never missing a target."
      },
      {
        "name": "Sky",
        "gender": "Other",
        "class": "Rogue",
        "faction": "Coral Conclave",
        "startingLocation": "Coral",
        "funFact": "Sky is always up for a good fight."
      },
      {
        "name": "Dragon",
        "gender": "Male",
        "class": "Mage",
        "faction": "Echoes of the Abyss",
        "startingLocation": "Ironhold",
        "funFact": "Dragon got his name after his knowledge on dragons."
      },
      {
        "name": "Blin",
        "gender": "Male",
        "class": "Mage",
        "faction": "Echoes of the Abyss",
        "startingLocation": "Strumore",
        "funFact": "Blin can see in the dark."
      },
      {
        "name": "Zore",
        "gender": "Female",
        "class": "Warrior",
        "faction": "The Celestial Cartographers",
        "startingLocation": "Fing",
        "funFact": "Zore can communicate with creatures of the sea."
      },
      {
        "name": "Riku",
        "gender": "Female",
        "class": "Rogue",
        "faction": "The Obsidian Overlook",
        "startingLocation": "Obsidian",
        "funFact": "Riku is the big sister to Roku."
      },
      {
        "name": "Roku",
        "gender": "Male",
        "class": "Rogue",
        "faction": "The Obsidian Overlook",
        "startingLocation": "Obsidian",
        "funFact": "Roku is the small brother to Riku."
      }
    ];
  }
}
