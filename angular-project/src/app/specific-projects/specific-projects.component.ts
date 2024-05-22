import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-specific-projects',
  templateUrl: './specific-projects.component.html',
  styleUrls: ['./specific-projects.component.css']
})
export class SpecificProjectsComponent implements OnInit {

  project_data: any;
  images: number[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.project_data = '{title:"", location:"", description:"", images:"0", "image_path": "", "year": "", "author": ""}';
    this.images = [];
  }

  ngOnInit(): void {
    this.loadProjectData();

    // Écouter les événements de navigation pour actualiser les données du projet
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.loadProjectData();
    });
  }

  loadProjectData() {
    let project_name = this.activatedRoute.snapshot.params['project_name'];
    let project_year = this.activatedRoute.snapshot.params['project_year'];

    if (project_name && project_year) {
      fetch('/assets/projects.json')
        .then(res => res.json())
        .then(json => {
          const project = json['projects'].find((p: any) => p.path === project_name && p.year == project_year);
          if (project) {
            this.project_data = project;
            this.images = Array.from({ length: this.project_data.images }, (_, index) => index + 1);
          } else {
            this.router.navigate(['/projects']);
          }
        });
    } else {
      this.router.navigate(['/projects']);
    }
  }
}
