var t;
var c=0;
var c1;

function wc(){
  c1 = int(random(0, 5));
  if (c1 == c && c != 5) c += 1;
  else if (c1 == c && c == 5) c -= 1;
  else c = c1;
}

function setup() {
  createCanvas(1000, 700);
  t = new Thing();
  tak = loadImage('tak.png');
  red = loadImage('red.png');
  blue = loadImage('blue.png');
  green = loadImage('green.png');
  pink = loadImage('pink.png');
  yell = loadImage('yell.png');
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
  else if (t.y > 700-tak.height) {
    t.yspeed = -1.5;
    wc();
  }
}
