import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaProblem6Component } from './area-problem-6.component';

describe('AreaProblem6Component', () => {
  let component: AreaProblem6Component;
  let fixture: ComponentFixture<AreaProblem6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaProblem6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaProblem6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
