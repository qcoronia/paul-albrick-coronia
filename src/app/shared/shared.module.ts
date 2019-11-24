import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SafePipe } from './pipes/safe.pipe';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, SafePipe],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SafePipe,
  ],
})
export class SharedModule { }
