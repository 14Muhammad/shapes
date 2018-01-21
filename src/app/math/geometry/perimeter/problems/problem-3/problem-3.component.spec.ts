import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Problem3Component} from './problem-3.component';

describe('Problem3Component', () => {
  let component: Problem3Component;
  let fixture: ComponentFixture<Problem3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Problem3Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Problem3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
