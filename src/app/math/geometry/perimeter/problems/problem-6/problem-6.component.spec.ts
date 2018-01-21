import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Problem6Component} from './problem-6.component';

describe('Problem6Component', () => {
  let component: Problem6Component;
  let fixture: ComponentFixture<Problem6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Problem6Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Problem6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
