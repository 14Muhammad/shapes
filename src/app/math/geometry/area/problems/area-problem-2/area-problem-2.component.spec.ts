import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaProblem2Component } from './area-problem-2.component';

describe('AreaProblem2Component', () => {
  let component: AreaProblem2Component;
  let fixture: ComponentFixture<AreaProblem2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaProblem2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaProblem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
