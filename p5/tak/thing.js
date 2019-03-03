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
    image(tak, this.x, this.y);
  }
}
