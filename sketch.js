let capture;
let microphone;
let micLevel;


function setup() {
  
  let canvas = createCanvas(windowWidth,windowHeight);
  background(255);
  frameRate(8);
  capture=createCapture(VIDEO);
  capture.hide();
  
  canvas.mousePressed(userStartAudio);
  textAlign(CENTER);
  mic = new p5.AudioIn();
  mic.start();
  
 
  
}



function draw() {
  

  
  micLevel = mic.getLevel();
  ellipseMode(CENTER);
  for(let i=0;i<20;i++){
    for(let j=0;j<20;j++){
      
      fill(200,150,0);
      ellipse(50*i,50*j,18,18);
      textAlign(CENTER);
      fill(255/i);
      text('8',50*i,50*j+100*micLevel+3);
    }
  }


  fill(0,175,0);
  rect(width/2,height/2,550,550);

 

 imageMode(CENTER);
 image(capture,width/2,height/2,500,500);
 
 push();
 textSize(60);
 fill(255,85);
 text('~\n `\n  !     \n  @\n#$%\n   ^              &      *',width/2,height/2-200);
 pop();

  


  push();
  rectMode(CENTER);
  
  fill(100,30);
  
  rect(width/2,height/2,500,500);
  
  push();
  
  if(mouseIsPressed){
    strokeWeight(10);
    point(pmouseX,pmouseY);
  }
  pop();

}
