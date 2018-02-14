import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Problem7Component } from './problem-7.component';

describe('Problem7Component', () => {
  let component: Problem7Component;
  let fixture: ComponentFixture<Problem7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Problem7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Problem7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
