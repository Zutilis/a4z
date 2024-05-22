import { Component } from '@angular/core';

declare const soon: Function;
declare const refreshSoon: Function;

@Component({
  selector: 'app-soon',
  templateUrl: './soon.component.html',
  styleUrls: ['./soon.component.css']
})
export class SoonComponent {

  constructor() { }

  ngOnInit(): void {
    // document.documentElement.style.setProperty('--default-bg', 'var(--orange)');
    setTimeout(() => {
      soon();
    }, 100);

    window.addEventListener('resize', () => {
      setTimeout(() => {
        refreshSoon();
      }, 100);
    });
  }

}
