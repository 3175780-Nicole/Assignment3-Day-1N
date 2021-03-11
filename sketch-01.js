function setup(){
   
    createCanvas (1000,1000); //width, height
    background (208, 255, 186); //rgb

}

function draw() {
    stroke(255, 138, 247);
    noFill(0);
    var rad = random (112) *2;
    ellipse(mouseX, mouseY, rad, rad);
}

