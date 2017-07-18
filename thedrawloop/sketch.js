//This is a simple one ball bousing program
//Following are the features:
//1.One ball bounces of left,top and right edges of canvas
//2.The ball does not bounce of the bottom edge automatically
//3.Ball bounces of the handle stuck to the bottom edge
//4. Ball speed increases after every reflection


var xpos = 255; // set position of ball x
var ypos = 25; // set position of ball y
var xspeed = 2; // set initial speed of ball
var yspeed = 2;// set initial speed of bally
var xposhand; // declare a position for the  paddel

function setup() {
    createCanvas(500, 500);
    noStroke();
    fill(random(255), random(255), random(255));
    rectMode(CENTER);
}

function draw() {
    background(240, 95);
    ellipse(xpos, ypos, 50, 50); //ball

    //making sure handle does not leave canvas area

    if (mouseX >= 40 && mouseX <= width - 40) {
        xposhand = mouseX;
    } else if (mouseX < 40) {
        xposhand = 40;
    } else if (mouseX > width - 40) {
        xposhand = width - 40;
    }
    rect(xposhand, height - 2.5, 80, 5);

    //Making the ball move
    xpos += xspeed;
    ypos += yspeed;

    //Making the ball bounce out of left,top and right edges
    if (xpos <= 25 || xpos >= width - 25) {
        if (xspeed < 10 && xspeed > -10) { //controlling the speed
            xspeed = xspeed * (-1.2);
        } else {
            xspeed = xspeed * (-1.01);
        }
    }
    if (ypos <= 25) {
        if (yspeed < 10 && yspeed > -10) {
            yspeed = yspeed * (-1.2);
        } else {
            yspeed = yspeed * (-1.01);
        }
    }
    //Making the ball bounce out of bottom handle
    if (ypos >= height - 25) {
        if (xpos <= xposhand + 65 && xpos >= xposhand - 65) {
            if (yspeed < 10 && yspeed > -10) {
                yspeed = yspeed * (-1.2);
            } else {
                yspeed = yspeed * (-1.01);
            }
        } else {
            textAlign(CENTER);
            textFont("Open Sans");
            textStyle(BOLD);
            text("GAME OVER", width / 2, height / 2);
            noLoop();
        }
    }
}

//Change the colors on a mouse press event
function mousePressed() {
    fill(random(255), random(255), random(255));
}

