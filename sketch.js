function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(500, 500);
  angleMode(DEGREES);
}

function draw() {
  // The same as doing: background(220); or --> background(220,220,220);
  background("black");

  translate(width / 2, height / 2);
  rotate(-90);
  let hr = hour();
  let mn = minute();
  let sc = second();
  console.log(sc);

  // text(hr, width / 2, height / 2);
  //text(mn, width / 2 + 20, height / 2);
  //text(sc, width / 2 + 40, height / 2);
  // rect(100, 150, 55, 55);
  noFill();
  ellipse(-150, 0, 20, 20);
  ellipse(150, 0, 20, 20);

  ellipse(185, 0, 20, 20);

  ellipse(0, 150, 20, 20);
  ellipse(0, -150, 20, 20);

  ellipse(0, 0, 350, 350);
  ellipse(0, 0, 280, 280);
  stroke("grey");
  strokeWeight(8);
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 225, 225, 0, secondAngle);
  stroke("red");
  strokeWeight(4);
  arc(0, 0, 225, 225, 0, secondAngle);

  push();
  rotate(secondAngle);
  stroke("#8cff98");
  strokeWeight(5);
  line(0, 0, 112.5, 0);
  pop();

  push();
  rotate(secondAngle);
  stroke("#c6f91f");
  strokeWeight(3);
  line(0, 0, 112.5, 0);
  pop();

  stroke("#BC4749");
  strokeWeight(8);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 180, 180, 0, minuteAngle);
  stroke("orange");
  strokeWeight(4);
  arc(0, 0, 185, 185, 0, minuteAngle);

  push();
  rotate(minuteAngle);
  stroke("#ee6055");
  strokeWeight(5);
  line(0, 0, 90, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke("#c82323");
  strokeWeight(3);
  line(0, 0, 93, 0);
  pop();

  stroke("#F2E8CF");
  strokeWeight(8);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 135, 135, 0, hourAngle);
  stroke("yellow");
  strokeWeight(4);
  arc(0, 0, 140, 140, 0, hourAngle);

  push();
  rotate(hourAngle);
  stroke("white");
  strokeWeight(5);
  line(0, 0, 67.5, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke("green");
  strokeWeight(3);
  line(0, 0, 70.5, 0);
  pop();

  rotate(90);
  stroke("white");
  strokeWeight(1);
  textSize(20);
  text(hr + " : " + mn + " : " + sc, 100, 200);

  stroke("#ffb7c3");
  strokeWeight(14);
  point(0, 0);

  stroke("lightpurple");
  strokeWeight(8);
  point(0, 0);

  stroke("lightgreen");
  strokeWeight(4);
  point(0, 0);
}
