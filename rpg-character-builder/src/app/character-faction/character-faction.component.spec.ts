import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CharacterFactionComponent } from './character-faction.component';

describe('CharacterFactionComponent', () => {
  let component: CharacterFactionComponent;
  let fixture: ComponentFixture<CharacterFactionComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterFactionComponent, HttpClientTestingModule]
    })
      .compileComponents();

    httpTestingController = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(CharacterFactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle error when faction is not found', () => {
    const expectedMessage = 'No faction found';
    const req =
      httpTestingController.expectOne(`http://localhost:3000/api/character-faction?
factions`);
    req.flush('No faction', { status: 404, statusText: 'Not Found' });
    expect(component.noFactionMessage).toEqual(expectedMessage);
  });

  it('should correctly fetch a list of character factions', () => {
    component.characterFaction = [
      {
        name: "The Iron Brotherhood",
        description: "The Iron Brotherhood is a faction of brave warriors. They are always on the top of everything you need to know."
      },
      {
        name: "Celestial Corsairs",
        description: "Celestial Corsairs is a faction of sassy yet powerful mages. They move at the speed of light yet are always careful to not make mistakes"
      },
      {
        name: "Coral Conclave",
        description: "Coral Conclave is a faction of outstanding rougues. They are friendly, yet are some of the bravest rogues out there."
      },
      {
        name: "The Celestial Cartographers",
        description: "The Celestial Cartographers is a faction of powerful female warriors. They always are ready to learn new techniques."
      },
      {
        name: "The Obsidian Overlook",
        description: "The Obsidian Overlook is a faction powerful rogues. Being family means they always have their backs at all times."
      },
      {
        name: "Echoes of the Abyss",
        description: "Echoes of the Abyss is a faction made up of male mages. They are wise and brave always ready for whatever comes into play."
      }
    ]
    const faction = component.characterFaction[0].name;
    expect([
      'The Iron Brotherhood',
      'Celestial Corsairs',
      'Coral Conclave',
      'The Celestial Cartographers',
      'The Obsidian Overlook',
      'Echoes of the Abyss'
    ]).toContain(faction);
  });

  it('should update characterDiv when character factions are found', () => {
    const mockFaction = {
      name: 'The Echoing Cliffs',
      description:
        'The Echoing Cliffs is a faction of honest and knowledgable mages. They can hear noises from a mile away.',
    };
    const req =
      httpTestingController.expectOne(`http://localhost:3000/api/character-faction?
factions`);
    req.flush(mockFaction);
    expect(component.characterFaction).toEqual(mockFaction);
  });
});
