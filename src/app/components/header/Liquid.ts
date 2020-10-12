import p5 from "p5";
export class Liquid {
    _p5: p5;
    x : number;
    y : number;
    w : number;
    h : number;
    c : number;

    constructor(p5: p5,x:number, y:number, w:number, h:number, c:number) {
        this._p5 = p5;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
      };

      contains(lx,ly) {
        return lx > this.x && lx < this.x + this.w &&
               ly > this.y && ly < this.y + this.h;
      };
      
      
      
      display() {
        this._p5.noStroke();
        //this._p5.fill(50);
        this._p5.rect(this.x, this.y, this.w, this.h);
      };


}