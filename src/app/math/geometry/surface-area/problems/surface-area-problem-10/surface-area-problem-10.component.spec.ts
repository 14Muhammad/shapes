import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceAreaProblem10Component } from './surface-area-problem-10.component';

describe('SurfaceAreaProblem10Component', () => {
  let component: SurfaceAreaProblem10Component;
  let fixture: ComponentFixture<SurfaceAreaProblem10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfaceAreaProblem10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfaceAreaProblem10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
