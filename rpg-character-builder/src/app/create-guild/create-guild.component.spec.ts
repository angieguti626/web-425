import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateGuildComponent } from './create-guild.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('CreateGuildComponent', () => {
  let component: CreateGuildComponent;
  let fixture: ComponentFixture<CreateGuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGuildComponent, ReactiveFormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreateGuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should be a valid form', () => {
    component.guildForm.controls['guildName'].setValue('Guild Name');
    component.guildForm.controls['description'].setValue('Description');
    component.guildForm.controls['type'].setValue('Competitive');
    component.guildForm.controls['acceptTerms'].setValue(true);
    component.guildForm.controls['notificationPreference'].setValue('Email');
    expect(component.guildForm.valid).toBeTruthy();
  });


  it('should make description required', () => {
      let control = component.guildForm.get('description');
      if (control) {
        control.setValue('');
        expect(control.valid).toBeFalsy();
      }
    });


  it('should make guildname required', () => {
    let control = component.guildForm.get('guildname');
    if (control) {
      control.setValue('');
      expect(control.valid).toBeFalsy();
    }
  });
});
