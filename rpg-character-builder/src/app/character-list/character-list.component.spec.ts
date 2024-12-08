import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterListComponent } from './character-list.component';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('characters in the newly created component are displaying correctly', () => {
    component.characters = [{ name: 'Hero', id: 1, gender: 'Male', class: 'Warrior' }, { name: 'Villain', id: 2, gender: 'Female', class: 'Mage' }];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('.character-profile').length).toBe(2);
    expect(compiled.querySelectorAll('.character-profile')[0].textContent).toContain('Hero');
    expect(compiled.querySelectorAll('.character-profile')[1].textContent).toContain('Villain');
  });

  it(' should display a message for an empty character list', () => {
    component.characters = [];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('No characters created yet.');
  });
});
