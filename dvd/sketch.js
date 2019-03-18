var t;
var c = 0;
var c1;

function wc(){
  c1 = int(random(0, 5));
  if (c1 == c && c != 5) c += 1;
  else if (c1 == c && c == 5) c -= 1;
  else c = c1;
}

function setup() {
  createCanvas(1000, 600);
  t = new Thing();
  tak = loadImage('faces/tak.png');
  red = loadImage('faces/red.png');
  blue = loadImage('faces/blue.png');
  green = loadImage('faces/green.png');
  pink = loadImage('faces/pink.png');
  yell = loadImage('faces/yell.png');
}

function draw() {
  background(0);
  t.update();
  t.show();
  if (t.x < 0){
    t.xspeed = 1.5;
    wc();
  }
  else if (t.x > 1000-tak.width) {
    t.xspeed = -1.5;
    wc();
  }
  if (t.y < 0) {
    t.yspeed = 1.5;
    wc();
  }
  else if (t.y > 600-tak.height) {
    t.yspeed = -1.5;
    wc();
  }
}
