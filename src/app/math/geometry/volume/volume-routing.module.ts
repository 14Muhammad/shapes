import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VolumeComponent} from './volume.component';
import {VolumeInfoComponent} from './practice/volume-info/volume-info.component';
import {VolumeProblem1Component} from './problems/volume-problem-1/volume-problem-1.component';
import {VolumeProblem2Component} from './problems/volume-problem-2/volume-problem-2.component';
import {VolumeProblem3Component} from './problems/volume-problem-3/volume-problem-3.component';
import {VolumeProblem4Component} from './problems/volume-problem-4/volume-problem-4.component';
import {VolumeProblem5Component} from './problems/volume-problem-5/volume-problem-5.component';
import {VolumeProblem6Component} from './problems/volume-problem-6/volume-problem-6.component';
import {VolumeProblem7Component} from './problems/volume-problem-7/volume-problem-7.component';
import {VolumeProblem8Component} from './problems/volume-problem-8/volume-problem-8.component';
import {VolumeProblem9Component} from './problems/volume-problem-9/volume-problem-9.component';
import {VolumeProblem10Component} from './problems/volume-problem-10/volume-problem-10.component';





const routes: Routes = [
  {path: 'volume', redirectTo: '', pathMatch: 'full'},
  {
    path: '', component: VolumeComponent,
    children: [
      {path: '', redirectTo: 'practice'},
      {path: 'practice', component: VolumeInfoComponent},
      {path: 'problem-1', component: VolumeProblem1Component},
      {path: 'problem-2', component: VolumeProblem2Component},
      {path: 'problem-3', component: VolumeProblem3Component},
      {path: 'problem-4', component: VolumeProblem4Component},
      {path: 'problem-5', component: VolumeProblem5Component},
      {path: 'problem-6', component: VolumeProblem6Component},
      {path: 'problem-7', component: VolumeProblem7Component},
      {path: 'problem-8', component: VolumeProblem8Component},
      {path: 'problem-9', component: VolumeProblem9Component},
      {path: 'problem-10', component: VolumeProblem10Component}
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
export class VolumeRoutingModule {
}
