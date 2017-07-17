
function setup(){
    createCanvas(300,300);
    background('blue');
    stroke('black');
    strokeWeight(10);
    fill('red');
    arc(width / 2, height / 2, 250, 250, PI, 0, CHORD);
    fill('white');
    // ellipse(150,150,250,250);
    arc(width / 2, height / 2, 250,250, 0, PI, CHORD);
    ellipse(150,150,80,80);
    fill('black');
    ellipse(150,150,40,40);

}