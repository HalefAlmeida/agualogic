import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './material/material.module';
import { CardComponent } from './components/ui/card/card.component';
import { RouterModule } from '@angular/router';
import { TopbarComponent } from './components/topbar/topbar.component';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [
    NavComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    TopbarComponent,
    DialogComponent,
  ],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [
    NavComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    DialogComponent,
  ],
})
export class SharedModule {}
