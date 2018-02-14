import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolygonAreasComponent } from './polygon-areas.component';

describe('PolygonAreasComponent', () => {
  let component: PolygonAreasComponent;
  let fixture: ComponentFixture<PolygonAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolygonAreasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolygonAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
