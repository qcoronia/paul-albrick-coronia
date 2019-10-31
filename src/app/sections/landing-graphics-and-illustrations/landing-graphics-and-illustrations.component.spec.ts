import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingGraphicsAndIllustrationsComponent } from './landing-graphics-and-illustrations.component';

describe('LandingGraphicsAndIllustrationsComponent', () => {
  let component: LandingGraphicsAndIllustrationsComponent;
  let fixture: ComponentFixture<LandingGraphicsAndIllustrationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingGraphicsAndIllustrationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingGraphicsAndIllustrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
