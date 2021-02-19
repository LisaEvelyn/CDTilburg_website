var r = 255;
var g = 0;
var b = 0;
var randomX;
var randomY;

function setup() {
  	createCanvas (windowWidth, windowHeight);
  	background(255);
}

function draw() {
	if (mouseX != pmouseX && mouseY != pmouseY){
		stroke(r, g, b, 5)
		fill(r, g, b, 50);
		randomX = random(-50,50);
		randomY = random(-50,50);
  		ellipse(mouseX+randomX, mouseY+randomY, 15, 15);
		colorUpdate();
		randomX = random(-20,20);
		randomY = random(-20,20);
  		ellipse(mouseX+randomX, mouseY+randomY, 5, 5);
		colorUpdate();
	}
}

function windowResized () {
	resizeCanvas (windowWidth, windowHeight); 
}

function colorUpdate(){
	if( g<255 && r==255 && b==0){
   		g++;
  	}
  	if(g == 255 && r>0){
   		r--; 
 	}
  	if(r==0 && g==255 && b<255){
  		b++;
  	}

  	if(b==255 && g>0){
   		g--; 
  	}
  	if(r < 255 && g==0 && b==255){
    		r++;
    	}
	if(r == 255 && b>0){
  		b--;
	}
}
