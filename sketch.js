
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1= new Ground(600,690,1300,20)
   stone1=new Stone(300,100,100,100)
   rubber1=new Rubber(300,100,30)
   hammer1=new Hammer(500,100,100,30)
   iron1=new Iron(650,100,100,10)
   sand1=new Sand(600,680,6)
   sand2=new Sand (800,660,7)
   sand3=new Sand(400,660,5)
	Engine.run(engine);
	
}


function draw() {

  rectMode(CENTER);
  background(255);
  
  drawSprites();

 ground1.display()
 stone1.display()
 rubber1.display()
 hammer1.display()
 iron1.display()
 sand1.display()
 sand2.display()
 sand3.display()
}



