import { Component, OnInit, ViewChild, ElementRef , HostListener , AfterViewInit} from '@angular/core';
import p5 from "p5";
import {Particle} from './particles'
import {Liquid} from './Liquid'
import jump from 'jump.js';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  public isMenuOpen: boolean = false;
  sticky: boolean = false;


  canvas: any;
  sw = 2;
  c = [];
  strokeColor = 0;
  particles = [];
  fuenteMono1:any;
  sizeRaton = 0;
  scala = 0;
  imgOrnitorrincut:any;
  //st = 'Ornitorrin-cut, es un proyecto multidisciplinario, nacido  de la reunión de distintas  naturalezas en equilibrio, destinado a crear piezas y alimentos visuales de alta gama    S u i    g e n e r i s.';
  st = "Ornitorrincut:";
  st2="Confección de universos visuales";
  Liquido:any;
  contiene:any;
 

  constructor(private servicioService: ServicioService) { }

  ngOnInit(): void {


///----------------------------------
    // this sketch was modified from the original
    // https://editor.p5js.org/Janglee123/sketches/HJ2RnrQzN
    const sketch = s => {

      s.preload = () =>
      {
        this.sizeRaton = s.windowWidth/30;
        this.fuenteMono1 = s.loadFont("assets/fonts/RobotoMono-Regular.ttf");
        this.imgOrnitorrincut = s.loadImage('assets/logo.png');
        this.scala=0.4;

      }


      s.setup = () => {
        let canvas2 = s.createCanvas(s.windowWidth+150, s.windowHeight*2);
        canvas2.parent('sketch-holder');
        canvas2.position(-10,-10);
        canvas2.style("z-index : 1");
        s.background(5,25,36);
         // Create liquid object
        this.Liquido = new Liquid(s,s.windowWidth/2, s.windowHeight - s.windowHeight / 4, 
          s.windowWidth/16, s.windowHeight / 4, 0.02);

        s.image(this.imgOrnitorrincut, s.windowWidth/4, 10);

        for(let i = 0; i<s.windowWidth/60; i++){
            this.particles.push(new Particle(s));
        }

      };

      s.draw = () => {
      s.background(5,25,36);
      //s.fill('#ED225D');
      s.textStyle(s.ITALIC);
      s.textSize(s.windowWidth/28);
      s.text(this.st, s.windowWidth/11, s.windowHeight - s.windowHeight/2, s.windowWidth, s.windowHeight); // Text wraps within text box
      s.textStyle(s.NORMAL);
      s.textSize(s.windowWidth/30);
      s.text(this.st2, (s.windowWidth/9)*3, s.windowHeight - s.windowHeight/2, s.windowWidth, s.windowHeight); // Text wraps within text box

      s.imageMode(s.CENTER);
      s.image(this.imgOrnitorrincut, s.windowWidth/2, s.windowHeight/4,this.scala*s.windowWidth, this.scala*this.imgOrnitorrincut.height*s.windowWidth/this.imgOrnitorrincut.width);

     // this.Liquido.display();
      
      if(s.mouseY > s.windowHeight + 20 && s.mouseY < s.windowHeight*2 + 20)
      {
        s.triangle(s.mouseX - this.sizeRaton/2, s.mouseY + this.sizeRaton/2, s.mouseX + this.sizeRaton/2, s.mouseY + this.sizeRaton/2, s.mouseX, s.mouseY - this.sizeRaton/2);
      }
      else
      {
        s.ellipse(s.mouseX, s.mouseY, this.sizeRaton, this.sizeRaton);
      }

    for(let j = 0;j<this.particles.length;j++){
    this.particles[j].createParticle();
    this.particles[j].moveParticle();
    this.particles[j].repulse();
    this.particles[j].joinParticles(this.particles.slice(j));
    this.contiene = this.Liquido.contains(this.particles[j].getPosx(),this.particles[j].getPosy());
    if(this.contiene == true)
      this.particles[j].setForce();

   }

      };


    };

    this.canvas = new p5(sketch);

///-----------------------------------


  }
  public onSidenavClick(): void {
    this.isMenuOpen = false;
  }
  public onClickScrollRaton() {
    jump(this.servicioService.getData());
  }


}
