import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceAreaProblem6Component } from './surface-area-problem-6.component';

describe('SurfaceAreaProblem6Component', () => {
  let component: SurfaceAreaProblem6Component;
  let fixture: ComponentFixture<SurfaceAreaProblem6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfaceAreaProblem6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfaceAreaProblem6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
