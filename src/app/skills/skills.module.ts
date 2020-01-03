import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsRoutingModule } from './skills.routing';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { MarkdownModule } from 'ngx-markdown';
import { SectionsModule } from '../home/sections/sections.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SkillsListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    SkillsRoutingModule,
    SectionsModule,

    MarkdownModule,
  ]
})
export class SkillsModule { }
