import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects_data: any;

  constructor() {
    this.projects_data = [];
  }

  ngOnInit(): void {
    fetch('/assets/projects.json')
    .then(res => res.json())
    .then(json => {
      this.projects_data = json['projects'];
    });
  }
}