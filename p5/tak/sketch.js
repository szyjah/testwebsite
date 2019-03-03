var t;

function setup() {
  createCanvas(1000, 700);
  t = new Thing();
  tak = loadImage('tak.png');
}

function draw() {
  background(51);
  t.update();
  t.show();
  if (t.x < 0) t.xspeed = 1.5;
  else if (t.x > 1000-tak.width) t.xspeed = -1.5;
  if (t.y < 0) t.yspeed = 1.5;
  else if (t.y > 700-tak.height) t.yspeed = -1.5;
}
