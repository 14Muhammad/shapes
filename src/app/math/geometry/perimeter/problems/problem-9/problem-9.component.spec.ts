import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Problem9Component } from './problem-9.component';

describe('Problem9Component', () => {
  let component: Problem9Component;
  let fixture: ComponentFixture<Problem9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Problem9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Problem9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
