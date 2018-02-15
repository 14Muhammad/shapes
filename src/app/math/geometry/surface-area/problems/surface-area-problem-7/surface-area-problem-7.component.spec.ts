import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceAreaProblem7Component } from './surface-area-problem-7.component';

describe('SurfaceAreaProblem7Component', () => {
  let component: SurfaceAreaProblem7Component;
  let fixture: ComponentFixture<SurfaceAreaProblem7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfaceAreaProblem7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfaceAreaProblem7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
