const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var bin1,bin2,bin3;
var support


function setup(){
    createCanvas(400,400);
   
   engine = Engine.create();
    world = engine.world;
  
  var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);
  
  var paper_options ={
        isStatic: false,
        restitution: 0,
        friction: 0.5,
        density: 1.2
    }
  
      fill("brown");
  paper = Bodies.circle(50,375,10, paper_options);
   World.add(world,paper);
  
 
  bin1 = new bin(300,360,10,50);
  bin2 = new bin(325,375,50,10);
  bin3 = new bin(350,360,10,50);
 
 
 
}

function draw(){
    background("white");
  
   Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
  
   ellipseMode(RADIUS);
    ellipse(paper.position.x, paper.position.y, 10, 10);
  
  


  
  drawSprites();
bin1.display();
bin2.display();
bin3.display();


}

