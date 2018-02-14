import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeProblem6Component } from './volume-problem-6.component';

describe('VolumeProblem6Component', () => {
  let component: VolumeProblem6Component;
  let fixture: ComponentFixture<VolumeProblem6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeProblem6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeProblem6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
