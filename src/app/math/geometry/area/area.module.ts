import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {AreaRoutingModule} from './area-routing.module';
import {AreaComponent} from './area.component';
import { PolygonAreasComponent } from './practice/polygon-areas/polygon-areas.component';
import { AreaProblem1Component } from './problems/area-problem-1/area-problem-1.component';
import { AreaProblem2Component } from './problems/area-problem-2/area-problem-2.component';
import { AreaProblem3Component } from './problems/area-problem-3/area-problem-3.component';
import { AreaProblem4Component } from './problems/area-problem-4/area-problem-4.component';
import { AreaProblem5Component } from './problems/area-problem-5/area-problem-5.component';
import { AreaProblem6Component } from './problems/area-problem-6/area-problem-6.component';
import { AreaProblem7Component } from './problems/area-problem-7/area-problem-7.component';
import { AreaProblem8Component } from './problems/area-problem-8/area-problem-8.component';
import { AreaProblem9Component } from './problems/area-problem-9/area-problem-9.component';


@NgModule({
  imports: [
    AreaRoutingModule,
    CommonModule,
    SharedModule
  ],
  declarations: [AreaComponent, PolygonAreasComponent,
    AreaProblem1Component, AreaProblem2Component,
    AreaProblem3Component, AreaProblem4Component,
    AreaProblem5Component, AreaProblem6Component,
    AreaProblem7Component, AreaProblem8Component,
    AreaProblem9Component],
  providers: []
})
export class AreaModule {
}
