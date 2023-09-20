function setup() {
  createCanvas(500, 500);
    background("white");

}

function draw() {

  stroke ("black")
  fill("beige")

  // console.log(mouseIsPressed)

  if(mouseIsPressed) { 
  rect (mouseX ,mouseY, 10, 25);
  }
}