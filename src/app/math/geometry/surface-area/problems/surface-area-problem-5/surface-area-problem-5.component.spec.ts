import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceAreaProblem5Component } from './surface-area-problem-5.component';

describe('SurfaceAreaProblem5Component', () => {
  let component: SurfaceAreaProblem5Component;
  let fixture: ComponentFixture<SurfaceAreaProblem5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfaceAreaProblem5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfaceAreaProblem5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
