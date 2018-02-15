import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {SurfaceAreaRoutingModule} from './surface-area-routing.module';
import {SurfaceAreaPracticeComponent} from './practice/surface-area-practice/surface-area-practice.component';
import {SurfaceAreaComponent} from './surface-area.component';
import {SurfaceAreaProblem1Component} from './problems/surface-area-problem-1/surface-area-problem-1.component';
import {SurfaceAreaProblem2Component} from './problems/surface-area-problem-2/surface-area-problem-2.component';
import {SurfaceAreaProblem3Component} from './problems/surface-area-problem-3/surface-area-problem-3.component';
import {SurfaceAreaProblem4Component} from './problems/surface-area-problem-4/surface-area-problem-4.component';
import {SurfaceAreaProblem5Component} from './problems/surface-area-problem-5/surface-area-problem-5.component';
import {SurfaceAreaProblem6Component} from './problems/surface-area-problem-6/surface-area-problem-6.component';
import {SurfaceAreaProblem7Component} from './problems/surface-area-problem-7/surface-area-problem-7.component';
import {SurfaceAreaProblem8Component} from './problems/surface-area-problem-8/surface-area-problem-8.component';
import {SurfaceAreaProblem9Component} from './problems/surface-area-problem-9/surface-area-problem-9.component';
import {SurfaceAreaProblem10Component} from './problems/surface-area-problem-10/surface-area-problem-10.component';
import {SurfaceAreaProblem11Component} from './problems/surface-area-problem-11/surface-area-problem-11.component';




@NgModule({
  imports: [
    SurfaceAreaRoutingModule,
    CommonModule,
    SharedModule
  ],
  declarations: [SurfaceAreaComponent, SurfaceAreaPracticeComponent, SurfaceAreaProblem1Component,
    SurfaceAreaProblem2Component, SurfaceAreaProblem3Component, SurfaceAreaProblem4Component,
    SurfaceAreaProblem5Component, SurfaceAreaProblem6Component, SurfaceAreaProblem7Component,
    SurfaceAreaProblem8Component, SurfaceAreaProblem9Component, SurfaceAreaProblem10Component,
    SurfaceAreaProblem11Component],
  providers: []
})
export class SurfaceAreaModule {
}
