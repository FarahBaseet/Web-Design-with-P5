var video;

function setup() {
    createCanvas(400, 400);
    video = createCapture(VIDEO);
    video.hide();
    describe("My super cool site from Class 9!");

}

function draw() {
    background(220);
    image(video, 0, 0, width, height);

}



/**notes:
 * today's topic is OBJECT ORIENTED PROGRAMMING
 *
 * not covered in class, will not be assessed but helpful: multiple sketches on html (slides 2 - 11 in week 6) 
 * this is how you can have multiple sketches on a site
 * 
 * array splice() to remove/replace specific value, push() to ad values, pop() to remove last value
*/