import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-guild-list',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h1>Created Guilds</h1>
  <div *ngIf="guilds.length > 0">
    <div class="guild-cards">
      <div class="guild-profile" *ngFor="let guild of guilds">
        <h3>{{ guild.guildName }}</h3>
        <p><strong>Description:</strong> {{ guild.description }}</p>
        <p><strong>Type:</strong> {{ guild.type }}</p>
        <p><strong>Notification Preference:</strong> {{ guild.notificationPreference }}</p>
      </div>
    </div>
  </div>

  <div *ngIf="guilds.length === 0">
    <p>No guilds created yet.</p>
  </div>
  `,
styles: `
h1 {
  margin-bottom: 10px;
}

.guild-cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
}

.guild-profile {
  flex: 0 0 calc(50% - 20px);
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}`
})

export class GuildListComponent {
  @Input() guilds: any[] = [];
}
