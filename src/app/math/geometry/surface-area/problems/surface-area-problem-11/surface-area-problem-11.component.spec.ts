import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceAreaProblem11Component } from './surface-area-problem-11.component';

describe('SurfaceAreaProblem11Component', () => {
  let component: SurfaceAreaProblem11Component;
  let fixture: ComponentFixture<SurfaceAreaProblem11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfaceAreaProblem11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfaceAreaProblem11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
