import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
  {path: 'math', redirectTo: '', pathMatch: 'full'},
  {path: '', loadChildren: 'app/math/geometry/geometry.module#GeometryModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true // <-- debugging purposes only
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
