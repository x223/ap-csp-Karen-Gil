function setup() {
  
}

function draw() {
   createCanvas(windowWidth, windowHeight);
 //rock
   fill('grey');
   stroke('grey')
   ellipse(100,120,100,150);
   
   //mouth
  fill('black');
stroke('black')
	line(60,140, 120,140);
	ellipse(60,100/2);
	rect(60,140, 60,30, 1,140)
	//Teeth
	fill(255, 187, 51)
	rect(60,140, 10,10, 1,30)
		rect(70,140, 10,10, 1,30)
			rect(80,140, 10,10, 1,30)
				rect(90,140, 10,10, 1,30)
					rect(60,160, 10,10, 1,30)
					rect(70,160, 10,10, 1,30)
	
	//eyes
	fill('red')
	strokeWeight(5)
	stroke(76, 35, 127)
	rect(60,100, 20,20, 1,30)
		rect(120,100, 40,20, 1,30)
	
	
   
  }