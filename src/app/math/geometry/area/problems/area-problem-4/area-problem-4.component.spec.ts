import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaProblem4Component } from './area-problem-4.component';

describe('AreaProblem4Component', () => {
  let component: AreaProblem4Component;
  let fixture: ComponentFixture<AreaProblem4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaProblem4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaProblem4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
