var video;

let gridSize = 10;//adjust this for number of circles to change

function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);//STEP 2

    video.size(width/gridSize, height/gridSize);
    video.hide();//this is ur real, baby small actual video. if you comment this out it'll show up

    rectMode(CENTER);
    //frameRate
    describe("My super cool site from Class 9!");

}

function draw() {
    //background(220);
    video.loadPixels();//huge array holdding RGBalpha (opacity) values. all of the data from the camera (constantly updating)
    //[r1,g1,b1,opacity1,r2,b2,g2,opacity2...........]
    

    
    for (var y = 0; y<video.height;y++) {
        for (var x = 0; x<video.width; x++) {
      
        let index = (x+y*video.width) * 4; // Multiplied by 4 since each pixel takes up 4 spots
      
        let r = video.pixels[index]; //taking pixel from massive array
        let g = video.pixels[index+10];
        let b = video.pixels[index+5];
      
      
        fill(r,g,b);
        noStroke();
      
        }
    }
}



/**notes:
 * today's topic is 
 * 
*/