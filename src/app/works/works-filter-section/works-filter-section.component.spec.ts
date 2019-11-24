import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksFilterSectionComponent } from './works-filter-section.component';

describe('WorksFilterSectionComponent', () => {
  let component: WorksFilterSectionComponent;
  let fixture: ComponentFixture<WorksFilterSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksFilterSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksFilterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
