import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { CardsSectionComponent } from './cards-section/cards-section.component';
import { GraphicHighlightSectionComponent } from './graphic-highlight-section/graphic-highlight-section.component';
import { TextualHighlightSectionComponent } from './textual-highlight-section/textual-highlight-section.component';
import { DefinitionGroupSectionComponent } from './definition-group-section/definition-group-section.component';
import { IconGroupSectionComponent } from './icon-group-section/icon-group-section.component';
import { CallToActionSectionComponent } from './call-to-action-section/call-to-action-section.component';
import { BulletListSectionComponent } from './bullet-list-section/bullet-list-section.component';
import { ContactFormSectionComponent } from './contact-form-section/contact-form-section.component';
import { DescriptiveCallToActionSectionComponent } from './descriptive-call-to-action-section/descriptive-call-to-action-section.component';
import { RouterModule } from '@angular/router';
import { ShortBannerComponent } from './short-banner/short-banner.component';



@NgModule({
  declarations: [
    BannerComponent,
    CardsSectionComponent,
    GraphicHighlightSectionComponent,
    TextualHighlightSectionComponent,
    DefinitionGroupSectionComponent,
    IconGroupSectionComponent,
    CallToActionSectionComponent,
    BulletListSectionComponent,
    ContactFormSectionComponent,
    DescriptiveCallToActionSectionComponent,
    ShortBannerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    BannerComponent,
    CardsSectionComponent,
    GraphicHighlightSectionComponent,
    TextualHighlightSectionComponent,
    DefinitionGroupSectionComponent,
    IconGroupSectionComponent,
    CallToActionSectionComponent,
    BulletListSectionComponent,
    ContactFormSectionComponent,
    DescriptiveCallToActionSectionComponent,
    ShortBannerComponent,
  ]
})
export class SectionsModule { }
