import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeProblem11Component } from './volume-problem-11.component';

describe('VolumeProblem11Component', () => {
  let component: VolumeProblem11Component;
  let fixture: ComponentFixture<VolumeProblem11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeProblem11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeProblem11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
