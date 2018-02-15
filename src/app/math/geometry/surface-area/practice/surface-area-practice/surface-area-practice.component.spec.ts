import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceAreaPracticeComponent } from './surface-area-practice.component';

describe('SurfaceAreaPracticeComponent', () => {
  let component: SurfaceAreaPracticeComponent;
  let fixture: ComponentFixture<SurfaceAreaPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfaceAreaPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfaceAreaPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
