import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Problem10Component } from './problem-10.component';

describe('Problem10Component', () => {
  let component: Problem10Component;
  let fixture: ComponentFixture<Problem10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Problem10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Problem10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
