import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacterComponent } from './create-character.component';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCharacterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should generate a random character ID between 1 and 1000 with no decimal places', () => {
    component.addToCharacter(); // This will trigger the generation of a new order ID
    expect(component.summary.characterId).toBeGreaterThan(0);
    expect(component.summary.characterId).toBeLessThanOrEqual(1000);
    expect(Number.isInteger(component.summary.characterId)).toBe(true);
  });

  it('should add a character with correct customization', () => {
    component.selectedCharacterId = 1;
    component.addToCharacter();
    const addedCharacter = component.summary.characters[0];
    expect(addedCharacter.id).toBe(1);
    expect(addedCharacter.name).toBe("");
    expect(addedCharacter.gender).toBe("Male");
    expect(addedCharacter.class).toBe("Warrior");
  });


  it('should reset all form fields to their default values after resetForm is called',() => {
    component.selectedCharacterId = 2;
    component.resetForm();
    expect(component.selectedCharacterId).toBe(1);
  })
});
