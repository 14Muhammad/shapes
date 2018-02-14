import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeProblem5Component } from './volume-problem-5.component';

describe('VolumeProblem5Component', () => {
  let component: VolumeProblem5Component;
  let fixture: ComponentFixture<VolumeProblem5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeProblem5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeProblem5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
