import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PerimeterComponent} from './perimeter.component';
import {Problem1Component} from './problems/problem-1/problem-1.component';
import {Problem2Component} from './problems/problem-2/problem-2.component';
import {Problem3Component} from './problems/problem-3/problem-3.component';
import {Problem4Component} from './problems/problem-4/problem-4.component';
import {Problem5Component} from './problems/problem-5/problem-5.component';
import {Problem6Component} from './problems/problem-6/problem-6.component';
import {PracticeComponent} from './practice/practice.component';
import {Problem7Component} from './problems/problem-7/problem-7.component';
import {Problem9Component} from './problems/problem-9/problem-9.component';
import {Problem8Component} from './problems/problem-8/problem-8.component';
import {Problem10Component} from './problems/problem-10/problem-10.component';
import {Problem11Component} from './problems/problem-11/problem-11.component';


const routes: Routes = [
  {path: 'perimeter', redirectTo: '', pathMatch: 'full'},
  {
    path: '', component: PerimeterComponent,
    children: [
      {path: '', redirectTo: 'practice'},
      {path: 'practice', component: PracticeComponent},
      {path: 'problem1', component: Problem1Component},
      {path: 'problem2', component: Problem2Component},
      {path: 'problem3', component: Problem3Component},
      {path: 'problem4', component: Problem4Component},
      {path: 'problem5', component: Problem5Component},
      {path: 'problem6', component: Problem6Component},
      {path: 'problem7', component: Problem7Component},
      {path: 'problem8', component: Problem8Component},
      {path: 'problem9', component: Problem9Component},
      {path: 'problem10', component: Problem10Component},
      {path: 'problem11', component: Problem11Component},
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
export class PerimeterRoutingModule {
}
