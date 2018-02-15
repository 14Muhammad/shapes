import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceAreaProblem4Component } from './surface-area-problem-4.component';

describe('SurfaceAreaProblem4Component', () => {
  let component: SurfaceAreaProblem4Component;
  let fixture: ComponentFixture<SurfaceAreaProblem4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfaceAreaProblem4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfaceAreaProblem4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
