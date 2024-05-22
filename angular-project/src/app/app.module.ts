import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule  } from '@angular/router';
import { NgOptimizedImage } from '@angular/common'

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { MentionsComponent } from './mentions/mentions.component';
import { HomeComponent } from './home/home.component';
import { SpecificProjectsComponent } from './specific-projects/specific-projects.component';
import { SoonComponent } from './soon/soon.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    MentionsComponent,
    HomeComponent,
    SpecificProjectsComponent,
    SoonComponent
  ],
  imports: [
    NgOptimizedImage,
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      // { path: 'blogs', component: MentionsComponent },
      { path: 'soon', component: SoonComponent },
      { path: 'mentions-legales', component: MentionsComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'projects/:project_year/:project_name', component: SpecificProjectsComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
