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
import {PracticeComponent } from './practice/practice.component';
import { Problem7Component } from './problems/problem-7/problem-7.component';
import { Problem8Component } from './problems/problem-8/problem-8.component';
import { Problem9Component } from './problems/problem-9/problem-9.component';
import { Problem10Component } from './problems/problem-10/problem-10.component';
import { Problem11Component } from './problems/problem-11/problem-11.component';

@NgModule({
  imports: [
    PerimeterRoutingModule,
    CommonModule,
    SharedModule
  ],
  declarations: [PerimeterComponent, Problem1Component, Problem2Component, Problem3Component,
    Problem4Component, Problem5Component, Problem6Component, PracticeComponent, Problem7Component, Problem8Component, Problem9Component, Problem10Component, Problem11Component],
  providers: []
})
export class PerimeterModule {
}
