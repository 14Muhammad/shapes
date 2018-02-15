import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceAreaProblem1Component } from './surface-area-problem-1.component';

describe('SurfaceAreaProblem1Component', () => {
  let component: SurfaceAreaProblem1Component;
  let fixture: ComponentFixture<SurfaceAreaProblem1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfaceAreaProblem1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfaceAreaProblem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
