import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeProblem9Component } from './volume-problem-9.component';

describe('VolumeProblem9Component', () => {
  let component: VolumeProblem9Component;
  let fixture: ComponentFixture<VolumeProblem9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeProblem9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeProblem9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
