import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { LandingProjectsComponent } from './landing-projects/landing-projects.component';
import { LandingSkillsAndTechStackComponent } from './landing-skills-and-tech-stack/landing-skills-and-tech-stack.component';
import { LandingAboutMeComponent } from './landing-about-me/landing-about-me.component';
import { LandingGraphicsAndIllustrationsComponent } from './landing-graphics-and-illustrations/landing-graphics-and-illustrations.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BannerComponent,
    LandingProjectsComponent,
    LandingSkillsAndTechStackComponent,
    LandingAboutMeComponent,
    LandingGraphicsAndIllustrationsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularFontAwesomeModule,
  ],
  exports: [
    BannerComponent,
    LandingProjectsComponent,
    LandingSkillsAndTechStackComponent,
    LandingAboutMeComponent,
    LandingGraphicsAndIllustrationsComponent
  ]
})
export class SectionsModule { }
