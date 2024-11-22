export interface Character {
  id: number;
  name: string;
  gender: string;
  class: string;
}
export interface Summary {
  characters: Character[];
  characterId: number;
}

import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-create-character',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
  <div class="character-form-container">
    <form class="character-form" #characterForm="ngForm"
    (ngSubmit)="generateCharacter();">
    <h1>Complete the form below to create a new character.</h1>

        <fieldset>
          <legend>My Character</legend>

          <label for="name">Character Name</label>
          <input type="text" id="name" name="name"
          [(ngModel)]="name" ngModel required>


          <label for="gender">Character Gender</label>
          <select name="gender" id="gender" [(ngModel)]="gender" ngModel required>
            <option *ngFor="let g of genders" [value]="g">{{ g }}</option>
          </select>

          <label for="characterClass">Character Class</label>
          <select name="class" id="class" [(ngModel)]="class" ngModel required>
           <option *ngFor="let characterClass of classes" [value]="characterClass">{{ characterClass }}</option>
          </select>

          <input type="submit" value="Add to Character" />
        </fieldset>
      </form>

    <div class="character-summary">
      <h1>Character Summary</h1>

      @if (summary.characters.length > 0) {
        <ul>
          @for (character of summary.characters; track character) {
            <li>
              <strong> {{ character.name }}</strong>
              <br />
              Gender: {{ character.gender }}
              <br />
              Class: {{ character.class }}
            </li>
          }
        </ul>
      } @else {
        <p>No character added yet.</p>
      }
    </div>

  </div>
  `,
  styles: `
  .character-form-container {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  .character-form {
    flex: 1;
    margin-right: 20px;
  }

  .character-summary {
    flex: 1;
  }

  fieldset {
    margin-bottom: 20px;
  }

  label, select, qty-input {
    display: block;
    margin-bottom: 5px;
  }

  .name-input, select, input[type="submit"] {
    padding: 8px;
    box-sizing: border-box;
  }

  select {
    width: 100%;
  }

  .name-input {
    width: 20%;
  }

  input[type="submit"] {
    float: right;
  }

  .character-summary li {
    margin-bottom: 10px;
    padding: 5px;
  }`
})

export class CreateCharacterComponent {
  characters: Character[];
  summary: Summary;
  selectedCharacterId: number;

  name: string;
  gender: string;
  class: string;

  genders: string[];
  classes: string[];

  constructor() {
    this.characters = [
      { id: 1, name: "Thorn", gender: "Male", class: "Warrior" },
      { id: 2, name: "Rose", gender: "Female", class: "Mage" },
      { id: 3, name: "Vamp", gender: "Other", class: "Rogue" }
    ];

    this.summary = { characters: [], characterId: 0 };
    this.selectedCharacterId = this.characters[0].id;

    this.name = "";
    this.gender = "";
    this.class = "";

    this.genders = ['Male', 'Female', 'Other'];
    this.classes = ['Rogue', 'Warrior', 'Mage'];
  }

  generateCharacter() {
    const selectedCharacterNum = Number(this.selectedCharacterId);

    const selectedCharacter = this.characters.find(character => character.id === selectedCharacterNum);

    // random number between 1 and 1000 for order Id no decimal places
    this.summary.characterId = Math.floor(Math.random() * 1000) + 1;

    if (selectedCharacter !== undefined) {
      const characterToAdd = {
        id: selectedCharacter.id,
        name: selectedCharacter.name,
        gender: selectedCharacter.gender,
        class: selectedCharacter.class
      }

      this.summary.characters.push(characterToAdd);
      console.log('Character after adding:', this.summary);

      this.resetForm();
    } else {
      console.error('Character not found in the list of available characters.',
        this.selectedCharacterId)
    }
  }

  resetForm() {
    if (this.characters.length > 0) {
      this.selectedCharacterId = this.characters[0].id;
    }
    this.name = "";
    this.gender = "";
    this.class = "";
  }
}
