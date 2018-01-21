import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Problem5Component} from './problem-5.component';

describe('Problem5Component', () => {
  let component: Problem5Component;
  let fixture: ComponentFixture<Problem5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Problem5Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Problem5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
