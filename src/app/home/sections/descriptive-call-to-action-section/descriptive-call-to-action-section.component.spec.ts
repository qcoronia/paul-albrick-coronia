import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptiveCallToActionSectionComponent } from './descriptive-call-to-action-section.component';

describe('DescriptiveCallToActionSectionComponent', () => {
  let component: DescriptiveCallToActionSectionComponent;
  let fixture: ComponentFixture<DescriptiveCallToActionSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptiveCallToActionSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptiveCallToActionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
