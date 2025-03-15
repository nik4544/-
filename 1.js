class Figure {
    var_x;
    var_y;
    constructor(x,y) {
       this._x = x;
       this._y = y;
    }
    square(){
        return undefined;
}
}
class Circle extends Figure {
    constructor(x,y,r){
       super(x,y);
       this.r = r;
    }
       square(){
       var s = Math.PI * this.r * this.r;
       return s;
    } 
}

class Rectangle extends Figure {
   constructor(x,y,h,w) {
   super(x,y);
      this.h = h;
      this.w = w;
   }
   square(){
       var s = this.h * this.w;
       return s;
}
}
const cryg = new Circle(1,1,2);
console.log(cryg.square());
const prumoyg = new Rectangle(1,1,3,4);
console.log(prumoyg.square());