import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-specific-projects',
  templateUrl: './specific-projects.component.html',
  styleUrls: ['./specific-projects.component.css']
})
export class SpecificProjectsComponent implements OnInit {

  project_data: any;
  images: number[];

  constructor (private router: Router,
    private activatedRoute: ActivatedRoute) 
  {
    this.project_data = '{title:"", images:"0", "image_path": ""}';
    this.images = [];
  }

  ngOnInit(): void {
    let project_name = '';
    let project_year = '';

    if (this.activatedRoute.snapshot.params['project_name'])
      project_name = this.activatedRoute.snapshot.params['project_name'];
    
    if (this.activatedRoute.snapshot.params['project_year'])
      project_year = this.activatedRoute.snapshot.params['project_year'];

      
    if (project_name !== '' && project_year !== '')
    {
      fetch('/assets/projects.json')
      .then(res => res.json())
      .then(json => {
        const project = json[project_year].find((p: any) => p.name === project_name);
        if (project) {
          this.project_data = project;
          this.images = Array.from({length: this.project_data.images}, (_, index) => index + 1);
        } else {
          this.router.navigate(['/projects']);
        }
      });
    } else {
      this.router.navigate(['/projects']);
    }
  }
}
