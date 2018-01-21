import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {PerimeterComponent} from './perimeter.component';
import {PerimeterRoutingModule} from './perimeter-routing.module';
import {Problem1Component} from './problems/problem-1/problem-1.component';
import {Problem2Component} from './problems/problem-2/problem-2.component';
import {Problem3Component} from './problems/problem-3/problem-3.component';
import {Problem4Component} from './problems/problem-4/problem-4.component';
import {Problem5Component} from './problems/problem-5/problem-5.component';
import {Problem6Component} from './problems/problem-6/problem-6.component';

@NgModule({
  imports: [
    PerimeterRoutingModule,
    CommonModule,
    SharedModule
  ],
  declarations: [PerimeterComponent, Problem1Component, Problem2Component, Problem3Component,
    Problem4Component, Problem5Component, Problem6Component]
})
export class PerimeterModule {
}
