import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

declare var $: any;

gsap.registerPlugin(ScrollTrigger);

declare function nav(): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ limitCallbacks: true });

    nav();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      setTimeout(() => {
        window.scrollTo(0, 0);
        // this.resetScrollTrigger();
        // this.loadLazyImage();
      }, 80);
    });
  }

  private resetScrollTrigger() {
    ScrollTrigger.killAll();
  }

  private loadLazyImage() 
  {
    $('.img-clean-load').each((index: any, image: any) =>
    {
      let newSRC = image.src,
          newImage = document.createElement("img"),
          
      loadImage = () => 
      {
        newImage.onload = () => 
        {
          newImage.onload = null; // avoid recursion
          newImage.src = image.src; // swap the src
          image.src = newSRC;

          gsap.set(newImage, {
            position: "absolute", 
            top: image.offsetTop, 
            left: image.offsetLeft, 
            width: image.offsetWidth, 
            height: image.offsetHeight
          });

          image.parentNode.appendChild(newImage);
          gsap.to(newImage, {
            opacity: 0, 
            onComplete: () => {
              if (newImage.parentNode != null) 
                newImage.parentNode.removeChild(newImage);
            }
          });
          st && st.kill();
        }
        if (newSRC != null)
          newImage.src = newSRC;
      }, 
          
      st = ScrollTrigger.create({
        trigger: image,
        start: "-50% bottom",
        onEnter: loadImage,
        onEnterBack: loadImage
      });
    });
  }
}
