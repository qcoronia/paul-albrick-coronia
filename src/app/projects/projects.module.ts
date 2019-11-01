import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects.routing';
import { ProjectsComponent } from './projects.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    AngularFontAwesomeModule,
  ]
})
export class ProjectsModule { }
