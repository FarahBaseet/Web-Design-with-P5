function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255);
    push();//everything outside push/pop is uneffected by the following
    translate(200, 200); //move 0,0 position to 200, 200
    fill(255, 0, 0);
    rotate(radians(frameCount));
    rect(0, 0, 100);//notice how this is at 0,0 but is actually at 200,200 because of translate
    pop();

}

//midterm notes:
//series of exercises. best way to practice is looking at slides, trying examples in them

//Simple Drawing Animation
//Conditionals
//Maths operators
//Variables
//Random, Map()
//Loops and Arrays
//Sin Wave
//Using P5 in text editor, be ready to set up file from scratch and import p5 library


//anything inside push and pop exists only within push and pop
//RGB vs HSB (Hue, Saturation, Brightness)
//ROTATION always takes place from the (0,0) position
//the way to get around this is by using TRANSLATE(x, y) to move the origin
//use framecount for animations ex.rotate(radians(frameCount)) to rotate continuously