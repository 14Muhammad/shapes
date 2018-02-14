import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaProblem8Component } from './area-problem-8.component';

describe('AreaProblem8Component', () => {
  let component: AreaProblem8Component;
  let fixture: ComponentFixture<AreaProblem8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaProblem8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaProblem8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
