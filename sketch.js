var boy;
var b;
var snow = [];
var s;
const Engine =  Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;

function preload(){ 
backgroundImg = loadImage("snow1.jpg");
b = loadImage("images.jfif")
}


function setup() {
  
  createCanvas(800,400);
   engine = Engine.create()
   world = engine.world;
  boy = createSprite(750, 350, 50, 50);
  boy.addImage(b)
  boy.scale=0.5;
 
  
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine)
  if(frameCount%10 === 0){
    snow.push( s = new Snow (random(0,800),-20)); 
  }
 
  
  drawSprites();
  for(var i = 0; i<snow.length;i++){
    snow[i].display();
  }
  
}