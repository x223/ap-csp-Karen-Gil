var weight = 10
var strokeColor = "black"
function setup() {
  createCanvas(500,500);
  text('a= Blue b= Black r=red g=Green o= Orange y= Yellow e= Erase',10,10 );
}

function draw() {
 if (mouseIsPressed) {
  stroke(strokeColor)
  strokeWeight(weight)
  line (pmouseX, pmouseY, mouseX, mouseY);
 
 }
}

 
function keyTyped() {
  if (key === 'b') {
    strokeColor = 'black';
  } else if (key === 'p') {
    strokeColor = '#E32173';
    weight = 10
  } else if (key === 'r') {
    strokeColor = 'red';
    weight = 10
  } else if (key === 'g') {
    strokeColor = 'green';
    weight = 10
       weight = 10
  } else if (key === 'o') {
    strokeColor = 'orange';
    weight = 10
       weight = 10
  } else if (key === 'y') {
    strokeColor = 'yellow';
    weight = 10} 
    else if (key === 'a') {
    strokeColor = 'blue';
    weight = 10
  
  } else if (key === 'e') {
    strokeColor = 'white';
    weight = 50
 

  }
  }