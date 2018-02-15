import {NgModule} from '@angular/core';
import {GeometryRoutingModule} from './geometry-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    GeometryRoutingModule,
    CommonModule,
    SharedModule
  ],
  declarations: []
})
export class GeometryModule {
}
