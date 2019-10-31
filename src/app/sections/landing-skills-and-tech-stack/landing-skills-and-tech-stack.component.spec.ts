import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingSkillsAndTechStackComponent } from './landing-skills-and-tech-stack.component';

describe('LandingSkillsAndTechStackComponent', () => {
  let component: LandingSkillsAndTechStackComponent;
  let fixture: ComponentFixture<LandingSkillsAndTechStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingSkillsAndTechStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingSkillsAndTechStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
