import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeProblem1Component } from './volume-problem-1.component';

describe('VolumeProblem1Component', () => {
  let component: VolumeProblem1Component;
  let fixture: ComponentFixture<VolumeProblem1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeProblem1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeProblem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
