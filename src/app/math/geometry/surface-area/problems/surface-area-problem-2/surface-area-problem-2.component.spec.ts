import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceAreaProblem2Component } from './surface-area-problem-2.component';

describe('SurfaceAreaProblem2Component', () => {
  let component: SurfaceAreaProblem2Component;
  let fixture: ComponentFixture<SurfaceAreaProblem2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfaceAreaProblem2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfaceAreaProblem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
