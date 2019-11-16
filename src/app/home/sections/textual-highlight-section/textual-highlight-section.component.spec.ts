import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextualHighlightSectionComponent } from './textual-highlight-section.component';

describe('TextualHighlightSectionComponent', () => {
  let component: TextualHighlightSectionComponent;
  let fixture: ComponentFixture<TextualHighlightSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextualHighlightSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextualHighlightSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
