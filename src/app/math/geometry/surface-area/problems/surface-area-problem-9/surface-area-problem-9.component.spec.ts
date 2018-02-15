import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceAreaProblem9Component } from './surface-area-problem-9.component';

describe('SurfaceAreaProblem9Component', () => {
  let component: SurfaceAreaProblem9Component;
  let fixture: ComponentFixture<SurfaceAreaProblem9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfaceAreaProblem9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfaceAreaProblem9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
