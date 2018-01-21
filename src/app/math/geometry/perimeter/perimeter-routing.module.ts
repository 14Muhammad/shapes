import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Problem1Component} from './problems/problem-1/problem-1.component';
import {Problem2Component} from './problems/problem-2/problem-2.component';
import {Problem3Component} from './problems/problem-3/problem-3.component';
import {Problem4Component} from './problems/problem-4/problem-4.component';
import {Problem5Component} from './problems/problem-5/problem-5.component';
import {PerimeterComponent} from './perimeter.component';


const routes: Routes = [
  {path: 'perimeter', redirectTo: '', pathMatch: 'full'},
  {
    path: '', component: PerimeterComponent, children: [
      {path: 'problem1', component: Problem1Component},
      {path: 'problem2', component: Problem2Component},
      {path: 'problem3', component: Problem3Component},
      {path: 'problem4', component: Problem4Component},
      {path: 'problem5', component: Problem5Component}
    ]
  },
  /*,
  { path: '**', redirectTo: 'problem1', pathMatch: 'full' }*/
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PerimeterRoutingModule {
}
