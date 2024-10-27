import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule  } from '@angular/router';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { MentionsComponent } from './mentions/mentions.component';
import { HomeComponent } from './home/home.component';
import { SpecificProjectsComponent } from './specific-projects/specific-projects.component';
import { SoonComponent } from './soon/soon.component';
import { PartnersComponent } from './partners/partners.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    MentionsComponent,
    HomeComponent,
    SpecificProjectsComponent,
    SoonComponent,
    PartnersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      // { path: 'blogs', component: MentionsComponent },
      { path: 'soon', component: SoonComponent },
      { path: 'mentions-legales', component: MentionsComponent },
      { path: 'partners', component: PartnersComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'projects/:project_year/:project_name', component: SpecificProjectsComponent },
    ], { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
