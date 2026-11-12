var xPos = 0;
var yPos = 0;
var size = 100;

var xPoses = [100, 200, 450, 400, 500];
var yPoses = [50, 300, 100, 400, 350];
var sizes = [50, 75, 100, 125, 150];

function setup(){
    createCanvas(600, 600);
    background(100);
}

function draw() {
    background(100);
    ellipse(mouseX + xPos, mouseY + yPos, 50);   
}


function mouseClicked() {
    fill(random(255), random(255), random(255));
}


function keyPressed() {
    if (key == 'w') {
        yPos = yPos - 10;
    }

}

//midterm notes
//arrays. imagine ur making 10 circles lol
//for loops to iterate through the array and draw the circles
//push() and pop() are functions used to isolate styles and transformations so they do not affect the rest of your drawing canvas
/**
 * var xPos = 100;
var yPos = 300;
var size = 100;

var xPoses = [100, 200, 450, 400, 500];
var yPoses = [50, 300, 300, 400, 350];
var sizes = [50, 75, 100, 125, 150];

function setup(){
    createCanvas(600, 600);
    background(100);
}

function draw() {
    background(190);
    for (var i = 0; i < 5; i++) {
        ellipse(xPoses[i], yPoses[i], sizes[i]);
    }
} 
 * 
 */


//or
/**var xPos = 100;
var yPos = 300;
var size = 100;

var xPoses = [100, 200, 450, 400, 500];
var yPoses = [50, 300, 100, 400, 350];
var sizes = [50, 75, 100, 125, 150];

function setup(){
    createCanvas(600, 600);
    background(100);
}

function draw() {
    fill(175,0,0);
    for (var i = 0; i < 5; i++) {
        ellipse(xPoses[i], yPoses[i], sizes[i]);
    }
}
    */


//SINE WAVES
    //breathing circle: draw(){ background(100); ellipse(width/2, height/2, 300 + sin(frameCount/20) * 200);}
    //gradient color: we can do fill (0, 100+ sin(), 100);, or to ddo all the colors, we can use HSV for 1 value rather than 3
    //    colorMode(HSB); //Hue, Saturation, Brightness
    //random:
    // background(0);
    //fill(sin(frameCount/20)*255,50,100);//this is now not RGB, it's hue, saturation brightness
    //ellipse(width/2, height/2, 300 + sin(frameCount/20)*200);
    //for (var i = 0; i < 5; i++) {
    //    ellipse(xPoses[i], yPoses[i] + sin(frameCount/20)*50, sizes[i]);
    //}
//KEYBOARD INPUTS
//map function?
//next week we will demo objects