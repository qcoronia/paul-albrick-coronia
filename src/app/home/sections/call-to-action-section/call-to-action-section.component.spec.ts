import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToActionSectionComponent } from './call-to-action-section.component';

describe('CallToActionSectionComponent', () => {
  let component: CallToActionSectionComponent;
  let fixture: ComponentFixture<CallToActionSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallToActionSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallToActionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
