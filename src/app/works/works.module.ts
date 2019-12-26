import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WorksRoutingModule } from './works.routing';
import { WorksListComponent } from './works-list/works-list.component';
import { SafePipe } from '../shared/pipes/safe.pipe';
import { SharedModule } from '../shared/shared.module';
import { SectionsModule } from '../home/sections/sections.module';
import { WorksFilterSectionComponent } from './works-filter-section/works-filter-section.component';
import { WorksItemViewComponent } from './works-item-view/works-item-view.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    WorksListComponent,
    WorksFilterSectionComponent,
    WorksItemViewComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    WorksRoutingModule,
    SectionsModule,

    MarkdownModule,
  ],
  providers: [
    SafePipe,
  ]
})
export class WorksModule { }
