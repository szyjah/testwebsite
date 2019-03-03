function Thing() {
  this.x = random(0, 400);
  this.y = random(0, 400);
  this.xspeed = -1;
  this.yspeed = 1;

  this.update = function(){
    this.x += this.xspeed;
    this.y += this.yspeed;
  }
  this.show = function(){
    if (c == 0) image(tak, this.x, this.y);
    else if (c == 1) image(blue, this.x, this.y);
    else if (c == 2) image(green, this.x, this.y);
    else if (c == 3) image(pink, this.x, this.y);
    else if (c == 4) image(red, this.x, this.y);
    else image(yell, this.x, this.y);
  }
}
