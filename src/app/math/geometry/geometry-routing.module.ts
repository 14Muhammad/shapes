import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AreaComponent} from './area/area.component';
import {PerimeterComponent} from './perimeter/perimeter.component';
import {SurfaceAreaComponent} from './surface-area/surface-area.component';
import {VolumeComponent} from './volume/volume.component';

export const routes: Routes = [
  {path: 'geometry', redirectTo: 'area', pathMatch: 'full'},
  {path: 'area', component: AreaComponent},
  {path: 'perimeter', component: PerimeterComponent},
  {path: 'surface-area', component: SurfaceAreaComponent},
  {path: 'volume', component: VolumeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeometryRoutingModule {
}
