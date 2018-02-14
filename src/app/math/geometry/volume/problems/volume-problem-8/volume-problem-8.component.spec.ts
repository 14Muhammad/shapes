import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeProblem8Component } from './volume-problem-8.component';

describe('VolumeProblem8Component', () => {
  let component: VolumeProblem8Component;
  let fixture: ComponentFixture<VolumeProblem8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeProblem8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeProblem8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
