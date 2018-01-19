import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SurfaceAreaComponent} from './surface-area.component';

describe('SurfaceAreaComponent', () => {
  let component: SurfaceAreaComponent;
  let fixture: ComponentFixture<SurfaceAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SurfaceAreaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfaceAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
