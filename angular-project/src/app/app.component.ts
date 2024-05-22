import { Component, OnInit } from '@angular/core';

declare function nav(): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'a4z-angular';

  ngOnInit(): void {
    nav();
  }
}
