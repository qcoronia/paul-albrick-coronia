import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorksRoutingModule } from './works.routing';
import { WorksListComponent } from './works-list/works-list.component';
import { SafePipe } from '../shared/pipes/safe.pipe';
import { SharedModule } from '../shared/shared.module';
import { SectionsModule } from '../home/sections/sections.module';
import { WorksFilterSectionComponent } from './works-filter-section/works-filter-section.component';



@NgModule({
  declarations: [WorksListComponent, WorksFilterSectionComponent],
  imports: [
    CommonModule,
    SharedModule,
    WorksRoutingModule,
    SectionsModule,
  ],
  providers: [
    SafePipe,
  ]
})
export class WorksModule { }
