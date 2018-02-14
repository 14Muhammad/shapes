import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeProblem2Component } from './volume-problem-2.component';

describe('VolumeProblem2Component', () => {
  let component: VolumeProblem2Component;
  let fixture: ComponentFixture<VolumeProblem2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeProblem2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeProblem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
