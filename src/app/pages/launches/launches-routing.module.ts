import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchDetailsComponent } from './launch-details/launch-details.component';
import { LaunchesComponent } from './launches.component';

const routes: Routes = [
  { path: '', component: LaunchesComponent },
  { path: ':id', component: LaunchDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaunchesRoutingModule { }
