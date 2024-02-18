import { Component, OnInit } from '@angular/core';

declare function registerLoadImageEvents(): any;
declare function registerGsap(): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'a4z-angular';

  ngOnInit(): void {
    registerLoadImageEvents();
    registerGsap();
  }
}
