import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconGroupSectionComponent } from './icon-group-section.component';

describe('IconGroupSectionComponent', () => {
  let component: IconGroupSectionComponent;
  let fixture: ComponentFixture<IconGroupSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconGroupSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconGroupSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
