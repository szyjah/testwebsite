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
  createCanvas(300, 500);
  t = new Thing();
  tak = loadImage('dvd2/faces/grey.png');
  red = loadImage('dvd2/faces/red.png');
  blue = loadImage('dvd2/faces/blue.png');
  green = loadImage('dvd2/faces/green.png');
  pink = loadImage('dvd2/faces/pink.png');
  yell = loadImage('dvd2/faces/yell.png');
}

function draw() {
  background(0);
  t.update();
  t.show();
  if (t.x < 0){
    t.xspeed = 1.5;
    wc();
  }
  else if (t.x > 300-tak.width) {
    t.xspeed = -1.5;
    wc();
  }
  if (t.y < 0) {
    t.yspeed = 1.5;
    wc();
  }
  else if (t.y > 500-tak.height) {
    t.yspeed = -1.5;
    wc();
  }
}
