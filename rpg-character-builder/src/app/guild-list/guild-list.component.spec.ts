import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuildListComponent } from './guild-list.component';
import { CommonModule } from '@angular/common';


describe('GuildListComponent', () => {
  let component: GuildListComponent;
  let fixture: ComponentFixture<GuildListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuildListComponent, CommonModule] // Importing the standalone GuildListComponent for testing
    });

    fixture = TestBed.createComponent(GuildListComponent); // Create an instance of the component fixture
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('guilds in the newly created component are displaying correctly', () => {
    component.guilds = [{ guildName: 'Knights', description: 'Brave warriors', type: 'Casual', notificationPreference: 'Email' }, { guildName: 'Wizards', description: 'Masters of magic', type: 'Educational', notificationPreference: 'SMS' }];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('.guild-profile').length).toBe(2);
    expect(compiled.querySelectorAll('.guild-profile')[0].textContent).toContain('Knights');
    expect(compiled.querySelectorAll('.guild-profile')[1].textContent).toContain('Wizards');
  });

  it('should display a message for an empty guild list', () => {
    component.guilds = [];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('No guilds created yet.');
  });
});
