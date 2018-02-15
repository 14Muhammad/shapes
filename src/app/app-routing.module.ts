import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {TeamComponent} from './team/team.component';

export const routes: Routes = [
  {path: 'math', redirectTo: '', pathMatch: 'full'},
  {path: '', loadChildren: 'app/math/geometry/geometry.module#GeometryModule'},
  {path: 'about', component: AboutComponent},
  {path: 'team', component: TeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true // <-- debugging purposes only
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
