import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeProblem7Component } from './volume-problem-7.component';

describe('VolumeProblem7Component', () => {
  let component: VolumeProblem7Component;
  let fixture: ComponentFixture<VolumeProblem7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeProblem7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeProblem7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
