
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin = new Dustbin(1200,650);
	paper = new Paper(200,450,40);
	ground1 = new Ground(width/2,670,width,20);



	Engine.run(engine);

}

function draw(){
	background("white");
	//Engine.update(engine);
/*   ellipseMode(RADIUS);
   rectMode(CENTER);
	rect(ground.body.position.c, ground.body.position.y, 1600,20)
  // ellipse(object.position.x,object.position.y,15);*/
  
	dustbin.display();
	paper.display();
	ground1.display();
   drawSprites();
   
}

function keyPressed() {
	if(keyCode===UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position, {x:90,y:-90});

	}
   }	