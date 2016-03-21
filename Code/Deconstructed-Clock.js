// create variable time

var time = 0;


function setup(){

// reload page every minute

  setTimeout(function(){
     window.location.reload(1);
  }, 60000);
  
// create variables of date, hour and minute

  var dt = new Date();
  var hour = dt.getHours();
  var minutes = dt.getMinutes();

// extract first and second digit of the current minute

  var minutesX_ = (minutes % 10);
  var minutes_X = round((minutes/10)-0.5);

// make the hours count from 1-12 instead of 0-23

  time = (hour % 12);

    if (hour === 12){
      time = 12;
    }
    if (hour === 0){
      time = 12;
    }


// create canvas that fits the window

createCanvas(windowWidth-15, windowHeight-15);
  var counterHour = 0;
  var points = [];
  
// create a circle (360 degrees) with number of edges according to the current hour 

  for(var i = 1; i < 360; i += (360/time)){
// implement an offset    
    var xOffset = random(300, 10);
    var yOffset = random(250, 10);
    var x = sin(radians(i))*xOffset + width/2;
    var y = cos(radians(i))*yOffset + height/3;
//  implement number of edges according to the current hour    
    var p = {"x":x,"y":y,"name":counterHour};
    points.push(p);
    var x1 = sin(radians(i))*220 + width/2;
    var y1 = cos(radians(i))*220 + height/3;
    vertex(x, y);
    counterHour++;
  }
  
// add background color  

  background(240, 240, 240);
    strokeWeight(2);
      noFill();

// define circle

beginShape();
  for(var j = 0; j < points.length; j++){
// extract point by point and assign x and y position    
    var onepoint = points[j];
    var px = onepoint.x;
    var py = onepoint.y;
    stroke(150,150,150);
    vertex(px,py);
// special case scenario for "circle" with 1 edge only - make it a point
    if (time === 1){
      strokeWeight(3);
      point(px, py);
    }
}

endShape(CLOSE);

// define first edge and following edges

var firstPoint = points[0];
var pastPoint = points[points.length-2];

// define the stroke color of the watch hands

stroke(0,0,0);


// create watch hands for second digit in minutes (0-9) on the right side of the first point

for(var k=0; k < minutesX_; k++){
  var currX_ = random(3,280);
  var currY_ = random(40,150);
// special case scenario for "circle" with 1 edge only - connect first point of the circle with random point in the lower right quarter of the canvas
  if(time == 1){
    strokeWeight(7);
    var currX_1 = random(10,60);
    point((width/2 + currX_), (height/2 + currY_));
    strokeWeight(2);
    line((width/2 + currX_), (height/2 + currY_), firstPoint.x, firstPoint.y);
// special case scenario for "circle" with 2 edges only - connect second point of the circle with random point right to and below it
  } else if (time == 2) {
    var currX_2 = random(10,60);
    strokeWeight(7);
    point((pastPoint.x + currX_), (pastPoint.y + currY_));
    strokeWeight(2);
    line((pastPoint.x + currX_), (pastPoint.y + currY_), firstPoint.x, firstPoint.y);
// case scenario for circles with 3-12 edges - connect first point of the circle with random point right to and below the first point
  } else if (time > 2){
    strokeWeight(7);
    point(firstPoint.x + currX_, firstPoint.y + currY_);
    strokeWeight(2);
    line(firstPoint.x + currX_, firstPoint.y + currY_, firstPoint.x, firstPoint.y);
  }
}

// create watch hands for first digit in minutes (1-5) on the left side of the first point

for(var l=0; l < minutes_X; l++){
  var curr_X = random(3,280);
  var curr_Y = random(40,150);
// special case scenario for "circle" with 1 edge only - connect first point of the circle with random point in the lower left quarter of the canvas
    if(time == 1){
    strokeWeight(3);
    point((width/2 - curr_X), (height/2 + curr_Y));
    strokeWeight(1);
    line((width/2 - curr_X), (height/2 + curr_Y), firstPoint.x, firstPoint.y);
// special case scenario for "circle" with 2 edges only - connect second point of the circle with random point left to and below it
  } else if (time == 2) {
    strokeWeight(3);
    point((pastPoint.x - curr_X), (pastPoint.y + curr_Y));
    strokeWeight(1);
    line((pastPoint.x - curr_X), (pastPoint.y + curr_Y), firstPoint.x, firstPoint.y);
// case scenario for circles with 3-12 edges - connect first point of the circle with random point left to and below the first point
  } else if(time > 2){
    strokeWeight(3);
    point(firstPoint.x - curr_X, firstPoint.y + curr_Y);
    strokeWeight(1);
    line(firstPoint.x - curr_X, firstPoint.y + curr_Y, firstPoint.x, firstPoint.y);
  }
}
}


function draw(){
}
