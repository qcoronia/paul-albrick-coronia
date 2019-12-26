import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksItemViewComponent } from './works-item-view.component';

describe('WorksItemViewComponent', () => {
  let component: WorksItemViewComponent;
  let fixture: ComponentFixture<WorksItemViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksItemViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
