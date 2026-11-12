balls = [];

function setup() {
    createCanvas(400, 400);
    describe("My super cool site with notes on Class 8!"); // for blind users to understand site

    balls
    b = new bubble(); //creating instance of this object
    b2 = new bubble();
}

function draw() {
    background(220);

    for (var i = 0; i<balls.length;i++){
        let ball = balls[i];
        ellipse(ball.x,ball.y,50);
        ball.y = ball.y+2;

    }
    b.display();
//    b.move();

    b2.display();
}



class ball {

    constructor (x, y, size){
        this.x=200;
        this.y=200;
        this.size=50;
    }

    display(){
        noFill();
        strokeWeight(3);
        ellipse(this.x, this.y, this.size);
    }

    //move(){

    //}

}

class bubble {

    constructor (x, y, size){
        this.x=200;
        this.y=200;
        this.size=50;
    }

    display(){
        noFill();
        strokeWeight(3);
        ellipse(this.x, this.y, this.size);
    }

    //move(){

    //}

}


function mousePressed(){
    balls.push({x: mouseX, y: mouseY})

    for(var i; i<balls.length; i++){
        println(balls[i]);
    }
}

function keyPressed(){
    balls.pop(); //removes balls when u click backspace! or any other key
}

/**notes:
 * today's topic is OBJECT ORIENTED PROGRAMMING
 *
 * not covered in class, will not be assessed but helpful: multiple sketches on html (slides 2 - 11 in week 6) 
 * this is how you can have multiple sketches on a site
 * 
 * array splice() to remove/replace specific value, push() to ad values, pop() to remove last value
*/