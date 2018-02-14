import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeProblem3Component } from './volume-problem-3.component';

describe('VolumeProblem3Component', () => {
  let component: VolumeProblem3Component;
  let fixture: ComponentFixture<VolumeProblem3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeProblem3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeProblem3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
