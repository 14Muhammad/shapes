import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaProblem11Component } from './area-problem-11.component';

describe('AreaProblem11Component', () => {
  let component: AreaProblem11Component;
  let fixture: ComponentFixture<AreaProblem11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaProblem11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaProblem11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
