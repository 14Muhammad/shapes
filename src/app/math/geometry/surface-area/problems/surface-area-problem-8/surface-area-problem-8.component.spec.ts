import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceAreaProblem8Component } from './surface-area-problem-8.component';

describe('SurfaceAreaProblem8Component', () => {
  let component: SurfaceAreaProblem8Component;
  let fixture: ComponentFixture<SurfaceAreaProblem8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfaceAreaProblem8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfaceAreaProblem8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
