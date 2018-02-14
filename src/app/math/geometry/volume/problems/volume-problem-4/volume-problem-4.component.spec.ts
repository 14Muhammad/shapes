import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeProblem4Component } from './volume-problem-4.component';

describe('VolumeProblem4Component', () => {
  let component: VolumeProblem4Component;
  let fixture: ComponentFixture<VolumeProblem4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeProblem4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeProblem4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
