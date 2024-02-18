import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule  } from '@angular/router';

import { AppComponent } from './app.component';
import { ArchivesComponent } from './archives/archives.component';
import { ProjectsComponent } from './projects/projects.component';
import { MentionsComponent } from './mentions/mentions.component';
import { HomeComponent } from './home/home.component';
import { SpecificProjectsComponent } from './specific-projects/specific-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    ArchivesComponent,
    ProjectsComponent,
    MentionsComponent,
    HomeComponent,
    SpecificProjectsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'archives', component: ArchivesComponent },
      { path: 'blogs', component: ArchivesComponent },
      { path: 'mentions-legales', component: MentionsComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'projects/:project_year/:project_name', component: SpecificProjectsComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
