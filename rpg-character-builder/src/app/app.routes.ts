import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './players/players.component';
import { SigninComponent } from './signin/signin.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { CreateGuildComponent } from './create-guild/create-guild.component';
// Importing authGuard
import { CharacterFactionComponent } from './character-faction/character-faction.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'character-faction',
    component: CharacterFactionComponent
  },
  {
    path: 'create-guild',
    component: CreateGuildComponent
  },
  {
    path: 'players',
    component: PlayersComponent
  },
  {
    path: 'create-character',
    component: CreateCharacterComponent
    // Only auth users can create characters
    canActivate: [authGuard]
  },
  {
    path: 'signin',
    component: SigninComponent
  }
];
