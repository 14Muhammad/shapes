import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaProblem9Component } from './area-problem-9.component';

describe('AreaProblem9Component', () => {
  let component: AreaProblem9Component;
  let fixture: ComponentFixture<AreaProblem9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaProblem9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaProblem9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
