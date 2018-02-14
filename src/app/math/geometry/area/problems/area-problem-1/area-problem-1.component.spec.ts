import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaProblem1Component } from './area-problem-1.component';

describe('AreaProblem1Component', () => {
  let component: AreaProblem1Component;
  let fixture: ComponentFixture<AreaProblem1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaProblem1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaProblem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
