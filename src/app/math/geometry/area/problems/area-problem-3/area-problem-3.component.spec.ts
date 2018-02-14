import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaProblem3Component } from './area-problem-3.component';

describe('AreaProblem3Component', () => {
  let component: AreaProblem3Component;
  let fixture: ComponentFixture<AreaProblem3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaProblem3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaProblem3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
