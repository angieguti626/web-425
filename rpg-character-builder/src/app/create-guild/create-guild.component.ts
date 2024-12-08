import { CommonModule } from '@angular/common';

import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { GuildListComponent } from '../guild-list/guild-list.component';

@Component({
  selector: 'app-create-guild',
  standalone: true,
  encapsulation: ViewEncapsulation.Emulated,
  template: `
  <div class="create-guild">
    <form [formGroup]="guildForm" (ngSubmit)="onSubmit()" class="guild-form" novalidate>
      <h1>Complete the form to create a character guild.</h1>

      <fieldset>
      <legend>Character Guild</legend>
        <label for="guildName">Guild Name:</label>
        <input id="guildName" formControlName="guildName" type="text" [ngClass]="{'is-invalid': isSubmitted && guildForm.controls['guildName'].invalid}">
        <div *ngIf="isSubmitted && guildForm.controls['guildName'].errors" class="error">
          Guild Name is required.
        </div>


        <label for="description">Description:</label>
        <textarea id="description" formControlName="description" [ngClass]="{'is-invalid': isSubmitted && guildForm.controls['description'].invalid}"></textarea>
        <div *ngIf="isSubmitted && guildForm.controls['description'].errors" class="error">
          Description is required.
        </div>

        <label for="type">Type:</label>
        <select id="type" formControlName="type" [ngClass]="{'is-invalid': isSubmitted && guildForm.controls['type'].invalid}">
          <option value="">Select Type</option>
          <option value="Competitive">Competitive</option>
          <option value="Casual">Casual</option>
          <option value="Social">Social</option>
          <option value="Educational">Educational</option>
        </select>
        <div *ngIf="isSubmitted && guildForm.controls['type'].errors" class="error">
          Type is required.
        </div>

        <label>
          <input type="checkbox" formControlName="acceptTerms" [ngClass]="{'is-invalid': isSubmitted && guildForm.controls['acceptTerms'].invalid}"> Accept Terms
        </label>
        <div *ngIf="isSubmitted && guildForm.controls['acceptTerms'].errors" class="error">
          You must accept the terms.
        </div>

        <div>
          Notification Preference:
          <label><input type="radio" formControlName="notificationPreference" value="Email" [ngClass]="{'is-invalid': isSubmitted && guildForm.controls['notificationPreference'].invalid}"> Email</label>
          <label><input type="radio" formControlName="notificationPreference" value="SMS" [ngClass]="{'is-invalid': isSubmitted && guildForm.controls['notificationPreference'].invalid}"> SMS</label>
          <label><input type="radio" formControlName="notificationPreference" value="In-App" [ngClass]="{'is-invalid': isSubmitted && guildForm.controls['notificationPreference'].invalid}"> In-App</label>
        </div>
        <div *ngIf="isSubmitted && guildForm.controls['notificationPreference'].errors" class="error">
          Notification Preference is required.
        </div>

        <button type="submit">Create Guild</button>
      </fieldset>
    </form>

   <app-guild-list [guilds]="guilds"></app-guild-list>
  `,
  styles: `
.error {
  color: red;
  padding: 5px;
  font-size: 12px;
  margin-top: -8px;
}

.guild-form {
  width: 100%;
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

select {
  width: 100%;
  display: block;
  margin-bottom: 5px;
  padding: 8px;
  box-sizing: border-box;
}

textarea {
  width: 100%;
  margin-bottom: 5px;
  padding: 8px;
  box-sizing: border-box;
}

input[type="submit"] {
  display: block;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
  float: right;
}

input[type="checkbox"],
input[type="radio"] {
  width: auto;
  margin-right: 5px;
  margin-bottom: 10px;
}

.created-guilds{
  flex: 0 0 calc(50% - 20px);
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.created-guilds ul li:last-of-type {
  list-style: none;
  margin-bottom: 10px;
  padding: 5px;
}
`,
imports: [ReactiveFormsModule, CommonModule, GuildListComponent],
})

export class CreateGuildComponent {
  guildForm: FormGroup;
  guilds: Array<any> = [];
  @Output() guildCreated = new EventEmitter<any>();
  isSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.guildForm = this.fb.group({
      guildName: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
      notificationPreference: ['', Validators.required]
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.guildForm.valid) {
      this.guilds.push(this.guildForm.value);
      this.guildCreated.emit(this.guildForm.value);
      this.guildForm.reset();
      this.isSubmitted = false;
    }
  }
}
