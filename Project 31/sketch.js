const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world
var maxDrops =100;
var drops = []
var umbrella
function preload(){
    
}

function setup(){
  createCanvas(400,700) 
  engine = Engine.create()
  world = engine.world    
  
  for(var i =0; i<maxDrops; i++){
    drops.push(new Drop(random(0,400), random(0,400)));
  }
 umbrella = new Umbrella(50,200);
}

function draw(){
    background(0)
    
    Engine.update(engine)

    for(var i =0; i<maxDrops; i++){
        drops[i].display()
        drops[i].updateY()
    }
    umbrella.display()
}   

