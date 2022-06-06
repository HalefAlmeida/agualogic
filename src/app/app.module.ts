import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/home/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AtlasComponent } from './pages/atlas/atlas.component';
import { SupportComponent } from './pages/support/support.component';
import { AquariumComponent } from './pages/aquarium/aquarium.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewChapterComponent } from './pages/atlas/view-chapter/view-chapter.component';
import { HttpClientModule } from '@angular/common/http';
import { ChapterComponent } from './pages/atlas/chapter/chapter.component';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/material/material.module';
import { SubchapterComponent } from './pages/atlas/subchapter/subchapter.component';
import { AquariumDetailsComponent } from './pages/aquarium/aquarium-details/aquarium-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    AtlasComponent,
    SupportComponent,
    AquariumComponent,
    ViewChapterComponent,
    ChapterComponent,
    SubchapterComponent,

    AquariumDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
