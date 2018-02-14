import {NgModule} from '@angular/core';
import {SurfaceAreaComponent} from './surface-area/surface-area.component';
import {GeometryRoutingModule} from './geometry-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    GeometryRoutingModule,
    CommonModule,
    SharedModule
  ],
  declarations: [SurfaceAreaComponent]
})
export class GeometryModule {
}
