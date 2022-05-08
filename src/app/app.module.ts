import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/home/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { AtlasComponent } from './pages/atlas/atlas.component';
import { SupportComponent } from './pages/support/support.component';
import { AquariumComponent } from './pages/aquarium/aquarium.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewChapterComponent } from './pages/atlas/view-chapter/view-chapter.component';
import { HttpClientModule } from '@angular/common/http';
import { ChapterComponent } from './pages/atlas/chapter/chapter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent,
    AtlasComponent,
    SupportComponent,
    AquariumComponent,
    ViewChapterComponent,
    ChapterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
