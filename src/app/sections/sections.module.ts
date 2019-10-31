import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { LandingProjectsComponent } from './landing-projects/landing-projects.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    BannerComponent,
    LandingProjectsComponent
  ],
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
  ],
  exports: [
    BannerComponent,
    LandingProjectsComponent
  ]
})
export class SectionsModule { }
