import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AquariumDetailsComponent } from './pages/aquarium/aquarium-details/aquarium-details.component';
import { AquariumComponent } from './pages/aquarium/aquarium.component';
import { AtlasComponent } from './pages/atlas/atlas.component';
import { ViewChapterComponent } from './pages/atlas/view-chapter/view-chapter.component';
import { HomeComponent } from './pages/home/home.component';
import { SupportComponent } from './pages/support/support.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'support',
    component: SupportComponent,
  },
  {
    path: 'atlas',
    component: AtlasComponent,
  },
  {
    path: 'atlas/:id',
    component: ViewChapterComponent,
  },

  {
    path: 'atlas/subchapter/:id',
    component: ViewChapterComponent,
  },
  {
    path: 'aquarium',
    component: AquariumComponent,
  },
  {
    path: 'aquarium/new',
    component: AquariumDetailsComponent,
  },
  {
    path: 'aquarium/edit/:id',
    component: AquariumDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
