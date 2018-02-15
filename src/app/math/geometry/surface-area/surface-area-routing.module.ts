import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SurfaceAreaPracticeComponent} from './practice/surface-area-practice/surface-area-practice.component';
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
import {SurfaceAreaComponent} from './surface-area.component';






const routes: Routes = [
  {path: 'volume', redirectTo: '', pathMatch: 'full'},
  {
    path: '', component: SurfaceAreaComponent,
    children: [
      {path: '', redirectTo: 'practice'},
      {path: 'practice', component: SurfaceAreaPracticeComponent},
      {path: 'problem-1', component: SurfaceAreaProblem1Component},
      {path: 'problem-2', component: SurfaceAreaProblem2Component},
      {path: 'problem-3', component: SurfaceAreaProblem3Component},
      {path: 'problem-4', component: SurfaceAreaProblem4Component},
      {path: 'problem-5', component: SurfaceAreaProblem5Component},
      {path: 'problem-6', component: SurfaceAreaProblem6Component},
      {path: 'problem-7', component: SurfaceAreaProblem7Component},
      {path: 'problem-8', component: SurfaceAreaProblem8Component},
      {path: 'problem-9', component: SurfaceAreaProblem9Component},
      {path: 'problem-10', component: SurfaceAreaProblem10Component}
    ]
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SurfaceAreaRoutingModule {
}
