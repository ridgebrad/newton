
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;


bob1=new Bob(300,350,50);
bob2=new Bob(350,350,50);
bob3=new Bob(400,350,50);
bob4=new Bob(450,350,50);
bob5=new Bob(500,350,50);

ground1 = new Ground(400,100,300,40);
  Rope1= new Rope(bob1.body,ground1.body,-50*2,0);
  Rope2= new Rope(bob2.body,ground1.body,-25*2,0);
  Rope3= new Rope(bob3.body,ground1.body,-0*2,0);
  Rope4= new Rope(bob4.body,ground1.body,25*2,0);
  Rope5= new Rope(bob5.body,ground1.body,50*2,0);
  
	Engine.run(engine);
  
}


function draw() {
  background(220);

  rectMode(CENTER);
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob3.display();
  bob4.display();
  bob5.display();
   
 ground1.display();
  Rope1.display();
  Rope2.display();
  Rope3.display();
  Rope4.display();
  Rope5.display();
  

  keyPressed();
  drawSprites ();
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100}); } 
} 


