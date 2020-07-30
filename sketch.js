
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,trash,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(400,350,50,50);

	//Engine.run(engine);
  
}


function draw() {
	background("black");
	Engine.update(engine);
  
  

  paper.display();
  //drawSprites();
 
}



