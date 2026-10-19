function setup() {
    createCanvas(400, 400);
    yPos = 25;
    i = 1;
}

function draw() {
    background(0);
    push();//everything outside push/pop is uneffected by the following
    translate(200, 200); //move 0,0 position to 200, 200
    fill(255, 0, 0);
    rotate(radians(frameCount));
    rect(0, 0, 100);//notice how this is at 0,0 but is actually at 200,200 because of translate
    pop();

    fill(0, 0, 255);
    ellipse(200, yPos, 50);

    if (yPos >= 375) {
        i = -1; 
    } else if (yPos <= 25) {
        i = 1;
    }

    yPos = yPos + i;

}

/**midterm notes:
series of exercises. best way to practice is looking at slides, trying examples in them


- Simple Drawing Animation
- Maths operators
- Variables
--- width and height are built in variables that give you the width and height of the canvas
- conditionals (if statements, || in conditional)
- Random(), Map()
--- random (OPTIONAL: LOWERBOUND, UPPERBOUND)
--- ex. random(height)
--- ex. random(100, 200)
--- ex. new value = map(initial value, initial lower bound, initial upper bound, new lower bound, new upper bound)
--- map basically converts a value, it uses a value to decide another value.
- Loops and Arrays
--- if you're populating the array manually, you can make the array before function setup()
--- you can also populate it manually (use forloop in setup())
- Sin Wave
- Using P5 in text editor, be ready to set up file from scratch and import p5 library


anything inside push and pop exists only within push and pop
RGB vs HSB (Hue, Saturation, Brightness)
ROTATION always takes place from the (0,0) position
the way to get around this is by using TRANSLATE(x, y) to move the origin
use framecount for animations ex.rotate(radians(frameCount)) to rotate continuously


WE WILL HAVE REFERENCES, SLIDES
the main challenge is time. we will have multiple exercises in limited time.
all application questions or creative exercises, like lab. but for reference the lab is 1 exercise for 45 minutes.
*/