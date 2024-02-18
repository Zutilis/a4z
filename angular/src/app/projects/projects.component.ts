import { Component, OnInit } from '@angular/core';

declare function loadProjects(): void;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects_data: any;
  years: number[];

  constructor() {
    this.projects_data = '"2023": [], "2024": []';
    this.years = [2024, 2023];
  }

  ngOnInit(): void {
    fetch('/assets/projects.json')
    .then(res => res.json())
    .then(json => {
      this.projects_data = json;
      loadProjects();
    });
  }
}