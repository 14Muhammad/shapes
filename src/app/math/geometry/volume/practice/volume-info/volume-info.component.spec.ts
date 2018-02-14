import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeInfoComponent } from './volume-info.component';

describe('VolumeInfoComponent', () => {
  let component: VolumeInfoComponent;
  let fixture: ComponentFixture<VolumeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
