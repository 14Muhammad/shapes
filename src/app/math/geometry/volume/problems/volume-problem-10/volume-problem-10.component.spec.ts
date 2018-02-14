import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeProblem10Component } from './volume-problem-10.component';

describe('VolumeProblem10Component', () => {
  let component: VolumeProblem10Component;
  let fixture: ComponentFixture<VolumeProblem10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeProblem10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeProblem10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
