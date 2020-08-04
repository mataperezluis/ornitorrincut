import { Component, OnInit, ViewChild, ElementRef , HostListener , AfterViewInit} from '@angular/core';
import p5 from "p5";
import {Particle} from './particles'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  public isMenuOpen: boolean = false;
  sticky: boolean = false;
  elementPosition: any;

  @ViewChild('stickyHr') menuElement: ElementRef;

  canvas: any;
  sw = 2;
  c = [];
  strokeColor = 0;
  particles = [];
  fuenteMono1:any;
  sizeRaton = 0;
  //st = 'Ornitorrin-cut, es un proyecto multidisciplinario, nacido  de la reunión de distintas  naturalezas en equilibrio, destinado a crear piezas y alimentos visuales de alta gama    S u i    g e n e r i s.';
  st = "Ornitorrincut: \n\nConfección de universos visuales";


  constructor() { }

  ngOnInit(): void {

///----------------------------------
    // this sketch was modified from the original
    // https://editor.p5js.org/Janglee123/sketches/HJ2RnrQzN
    const sketch = s => {

      s.preload = () =>
      {
        this.sizeRaton = s.windowWidth/30;
        this.fuenteMono1 = s.loadFont("assets/fonts/RobotoMono-Regular.ttf");


      }


      s.setup = () => {
        let canvas2 = s.createCanvas(s.windowWidth-20, s.windowHeight*5);
        canvas2.parent('sketch-holder');
        canvas2.position(0,0);
        canvas2.style("z-index : -1");
        s.background(255);

        for(let i = 0; i<s.windowWidth/40; i++){
            this.particles.push(new Particle(s));
        }

      };

      s.draw = () => {
      s.background(255);
      //s.fill('#ED225D');
      s.textFont(this.fuenteMono1);
      s.textSize(s.windowWidth/32);
      s.text(this.st, s.windowWidth/10, s.windowHeight - s.windowHeight/2, s.windowWidth, s.windowHeight); // Text wraps within text box
      s.ellipse(s.mouseX, s.mouseY, this.sizeRaton, this.sizeRaton);

    for(let j = 0;j<this.particles.length;j++){
    this.particles[j].createParticle();
    this.particles[j].moveParticle();
    this.particles[j].repulse();
    this.particles[j].joinParticles(this.particles.slice(j));

   }

      };




    };

    this.canvas = new p5(sketch);

///-----------------------------------


  }
  public onSidenavClick(): void {
    this.isMenuOpen = false;
  }

  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
   handleScroll(){
     const windowScroll = window.pageYOffset;
     if(windowScroll >= this.elementPosition){
       this.sticky = true;
     } else {
       this.sticky = false;
     }
   }

}
