import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaProblem10Component } from './area-problem-10.component';

describe('AreaProblem10Component', () => {
  let component: AreaProblem10Component;
  let fixture: ComponentFixture<AreaProblem10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaProblem10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaProblem10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
