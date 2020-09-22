import p5 from "p5";
export class Particle {
// setting the co-ordinates, radius and the
// speed of a particle in both the co-ordinates axes.
    _p5: p5;
    x:number;
    y:number;
    r:number;
    xSpeed:number;
    ySpeed:number;
    altura:number;
  constructor(p5: p5){
    this._p5 = p5;
    this.altura = this._p5.windowHeight + this._p5.windowHeight/8;
    this.x = this._p5.random(0,this._p5.width);
    this.y = this._p5.random(0,this.altura);
    this.r = this._p5.random(4,8);
    this.xSpeed = this._p5.random(-4,4);
    this.ySpeed = this._p5.random(-2,3);
  }

// creation of a particle.
  createParticle() {
    this._p5.noStroke();
    this._p5.fill('rgba(250,247,247,0.5)');
    this._p5.circle(this.x,this.y,this.r);
  }

// setting the particle in motion.
  moveParticle() {
    if(this.x < 0 || this.x > this._p5.width)
      this.xSpeed*=-1;
    if(this.y < 0 || this.y > this.altura)
      this.ySpeed*=-1;
    this.x+=2*this.xSpeed;
    this.y+=2*this.ySpeed;
  }

  repulse() {
      let dis = this._p5.dist(this.x,this.y,this._p5.mouseX,this._p5.mouseY);
      if(dis<this._p5.windowWidth/30) {
        if(this.x >= this._p5.mouseX)
        this.xSpeed = -1 * this.xSpeed;
        if(this.y > this._p5.mouseY)
        this.ySpeed = -1 * this.ySpeed;
        this.x+=2*this.xSpeed;
        this.y+=2*this.ySpeed;

      }
  }

// this function creates the connections(lines)
// between particles which are less than a certain distance apart
  joinParticles(particles) {
    particles.forEach(element =>{
      let dis = this._p5.dist(this.x,this.y,element.x,element.y);
      if(dis<60) {
        this._p5.stroke('rgba(250,247,247,0.5)');
        this._p5.line(this.x,this.y,element.x,element.y);
      }
    });
  }
}
