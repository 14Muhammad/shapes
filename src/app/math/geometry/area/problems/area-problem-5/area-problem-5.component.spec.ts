import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaProblem5Component } from './area-problem-5.component';

describe('AreaProblem5Component', () => {
  let component: AreaProblem5Component;
  let fixture: ComponentFixture<AreaProblem5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaProblem5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaProblem5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
