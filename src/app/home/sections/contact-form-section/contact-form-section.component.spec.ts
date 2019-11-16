import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormSectionComponent } from './contact-form-section.component';

describe('ContactFormSectionComponent', () => {
  let component: ContactFormSectionComponent;
  let fixture: ComponentFixture<ContactFormSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFormSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
