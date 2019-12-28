import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'projects', loadChildren: () => import('./works/works.module').then(m => m.WorksModule), pathMatch: 'prefix' },
  { path: 'skills', loadChildren: () => import('./skills/skills.module').then(m => m.SkillsModule), pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
