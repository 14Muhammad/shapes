import {NgModule} from '@angular/core';
import {VolumeComponent} from './volume/volume.component';
import {SurfaceAreaComponent} from './surface-area/surface-area.component';
import {AreaComponent} from './area/area.component';
import {PerimeterComponent} from './perimeter/perimeter.component';
import {GeometryRoutingModule} from './geometry-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    GeometryRoutingModule,
    CommonModule,
    SharedModule
  ],
  declarations: [VolumeComponent, SurfaceAreaComponent, AreaComponent, PerimeterComponent]
})
export class GeometryModule {
}
