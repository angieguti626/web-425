import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div *ngIf="characters.length > 0">
  <h2>Created Characters</h2>
  <div class="character-profiles">
    <div class="character-profile" *ngFor="let character of characters">
      <h3>{{ character.name }}</h3>
      <p><strong>ID:</strong> {{ character.id }}</p>
      <p><strong>Gender:</strong> {{ character.gender }}</p>
      <p><strong>Class:</strong> {{ character.class }}</p>
    </div>
  </div>
</div>
<div *ngIf="characters.length === 0">
  <p>No characters created yet.</p>
</div>`,
  styles: `
  .page-header {
  text-align: center;
  margin-bottom: 20px;
}

.page-header h1 {
  color: white;
  font-family: 'MedievalSharp', cursive;
  margin-bottom: 10px;
}

.page-header p {
  color: #DAA520;
  font-family: 'Roboto', sans-serif;
  margin: 0;
}

.character-profiles {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}

.character-profile {
  background-color: #2B0101;
  border: 2px solid gold;
  border-radius: 10px;
  padding: 20px;
  width: 200px;
  color: white;
  font-family: 'Roboto', sans-serif;
}

.character-profile h3 {
  font-family: 'MedievalSharp', cursive;
  margin-top: 0;
}

.character-profile p {
  margin: 5px 0;
}
`
})
export class CharacterListComponent {
  @Input() characters: any[] = [];
}
