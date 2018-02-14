import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaProblem7Component } from './area-problem-7.component';

describe('AreaProblem7Component', () => {
  let component: AreaProblem7Component;
  let fixture: ComponentFixture<AreaProblem7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaProblem7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaProblem7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
