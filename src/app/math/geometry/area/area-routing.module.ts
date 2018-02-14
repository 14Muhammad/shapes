import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AreaComponent} from './area.component';
import {PolygonAreasComponent} from './practice/polygon-areas/polygon-areas.component';
import {AreaProblem1Component} from './problems/area-problem-1/area-problem-1.component';
import {AreaProblem2Component} from './problems/area-problem-2/area-problem-2.component';
import {AreaProblem3Component} from './problems/area-problem-3/area-problem-3.component';
import {AreaProblem4Component} from './problems/area-problem-4/area-problem-4.component';
import {AreaProblem5Component} from './problems/area-problem-5/area-problem-5.component';
import {AreaProblem6Component} from './problems/area-problem-6/area-problem-6.component';
import {AreaProblem7Component} from './problems/area-problem-7/area-problem-7.component';
import {AreaProblem8Component} from './problems/area-problem-8/area-problem-8.component';
import {AreaProblem9Component} from './problems/area-problem-9/area-problem-9.component';




const routes: Routes = [
  {path: 'area', redirectTo: '', pathMatch: 'full'},
  {
    path: '', component: AreaComponent,
    children: [
      {path: '', redirectTo: 'polygon-areas'},
      {path: 'polygon-areas', component: PolygonAreasComponent},
      {path: 'area-problem-1', component: AreaProblem1Component},
      {path: 'area-problem-2', component: AreaProblem2Component},
      {path: 'area-problem-3', component: AreaProblem3Component},
      {path: 'area-problem-4', component: AreaProblem4Component},
      {path: 'area-problem-5', component: AreaProblem5Component},
      {path: 'area-problem-6', component: AreaProblem6Component},
      {path: 'area-problem-7', component: AreaProblem7Component},
      {path: 'area-problem-8', component: AreaProblem8Component},
      {path: 'area-problem-9', component: AreaProblem9Component}
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
export class AreaRoutingModule {
}
