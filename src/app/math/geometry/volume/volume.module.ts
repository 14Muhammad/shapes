import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {VolumeRoutingModule} from './volume-routing.module';
import {VolumeComponent} from './volume.component';
import { VolumeInfoComponent } from './practice/volume-info/volume-info.component';
import { VolumeProblem1Component } from './problems/volume-problem-1/volume-problem-1.component';
import { VolumeProblem2Component } from './problems/volume-problem-2/volume-problem-2.component';
import { VolumeProblem3Component } from './problems/volume-problem-3/volume-problem-3.component';
import { VolumeProblem4Component } from './problems/volume-problem-4/volume-problem-4.component';
import { VolumeProblem5Component } from './problems/volume-problem-5/volume-problem-5.component';
import { VolumeProblem6Component } from './problems/volume-problem-6/volume-problem-6.component';
import { VolumeProblem7Component } from './problems/volume-problem-7/volume-problem-7.component';
import { VolumeProblem8Component } from './problems/volume-problem-8/volume-problem-8.component';
import { VolumeProblem9Component } from './problems/volume-problem-9/volume-problem-9.component';
import { VolumeProblem10Component } from './problems/volume-problem-10/volume-problem-10.component';
import { VolumeProblem11Component } from './problems/volume-problem-11/volume-problem-11.component';



@NgModule({
  imports: [
    VolumeRoutingModule,
    CommonModule,
    SharedModule
  ],
  declarations: [VolumeComponent, VolumeInfoComponent, VolumeProblem1Component,
    VolumeProblem2Component, VolumeProblem3Component, VolumeProblem4Component,
    VolumeProblem5Component, VolumeProblem6Component, VolumeProblem7Component,
    VolumeProblem8Component, VolumeProblem9Component, VolumeProblem10Component, VolumeProblem11Component],
  providers: []
})
export class VolumeModule {
}
