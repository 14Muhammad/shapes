import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceAreaProblem3Component } from './surface-area-problem-3.component';

describe('SurfaceAreaProblem3Component', () => {
  let component: SurfaceAreaProblem3Component;
  let fixture: ComponentFixture<SurfaceAreaProblem3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfaceAreaProblem3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfaceAreaProblem3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
