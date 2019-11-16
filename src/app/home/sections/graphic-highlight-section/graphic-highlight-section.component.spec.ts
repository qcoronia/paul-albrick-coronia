import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicHighlightSectionComponent } from './graphic-highlight-section.component';

describe('GraphicHighlightSectionComponent', () => {
  let component: GraphicHighlightSectionComponent;
  let fixture: ComponentFixture<GraphicHighlightSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicHighlightSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicHighlightSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
