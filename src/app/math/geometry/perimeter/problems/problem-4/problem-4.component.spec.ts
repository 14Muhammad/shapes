import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Problem4Component} from './problem-4.component';

describe('Problem4Component', () => {
  let component: Problem4Component;
  let fixture: ComponentFixture<Problem4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Problem4Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Problem4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
