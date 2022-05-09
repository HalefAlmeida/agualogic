import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './material/material.module';
import { CardComponent } from './components/ui/card/card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavComponent, HeaderComponent, FooterComponent, CardComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [NavComponent, HeaderComponent, FooterComponent, CardComponent],
})
export class SharedModule {}
