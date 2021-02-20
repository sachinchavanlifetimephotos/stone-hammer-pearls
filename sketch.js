
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body; 
const Render = Matter.Render;
const Constraint=Matter.Constraint; 
var hammer1; 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    
	engine = Engine.create();
	world = engine.world;
   
	hammer1=new hammer1(200,200,20,20); 
	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("orange");
  
  drawSprites(); 
  hammer1.display(); 
 }
