import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionGroupSectionComponent } from './definition-group-section.component';

describe('DefinitionGroupSectionComponent', () => {
  let component: DefinitionGroupSectionComponent;
  let fixture: ComponentFixture<DefinitionGroupSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinitionGroupSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitionGroupSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
