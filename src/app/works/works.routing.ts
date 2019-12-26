import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorksListComponent } from './works-list/works-list.component';
import { WorksItemViewComponent } from './works-item-view/works-item-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'list' },
  { path: 'list', component: WorksListComponent },
  { path: 'item/:slug', component: WorksItemViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorksRoutingModule { }
