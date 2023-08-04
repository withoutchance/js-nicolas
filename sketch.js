function setup() {
    createCanvas(1920, 1080);
    background("black");
  }
  
  function draw() {
    stroke("blue");
    fill("red");
    
    if(mouseIsPressed){
      rect(mouseX, mouseY, 20, 35);
    }
    
  }
    