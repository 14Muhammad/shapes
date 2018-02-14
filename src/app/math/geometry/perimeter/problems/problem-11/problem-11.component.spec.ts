import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Problem11Component } from './problem-11.component';

describe('Problem11Component', () => {
  let component: Problem11Component;
  let fixture: ComponentFixture<Problem11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Problem11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Problem11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
