import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SurfaceAreaComponent} from './surface-area/surface-area.component';

export const routes: Routes = [
  {path: 'geometry', redirectTo: 'area', pathMatch: 'full'},
  {path: 'area', loadChildren: 'app/math/geometry/area/area.module#AreaModule'},
  {path: 'perimeter', loadChildren: 'app/math/geometry/perimeter/perimeter.module#PerimeterModule'},
  {path: 'surface-area', component: SurfaceAreaComponent},
  {path: 'volume', loadChildren: 'app/math/geometry/volume/volume.module#VolumeModule'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeometryRoutingModule {
}
