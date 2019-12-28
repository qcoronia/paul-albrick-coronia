import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsRoutingModule } from './skills.routing';
import { SkillsListComponent } from './skills-list/skills-list.component';

@NgModule({
  declarations: [
    SkillsListComponent
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule,
  ]
})
export class SkillsModule { }
