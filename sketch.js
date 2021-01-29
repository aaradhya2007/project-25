
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbin2,dustbin3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;



	//Create the Bodies Here.

dustbin3=new Dustbin(600,200,100,100)

paper=new Paper(100,480,40)
ground=new Ground(600,height,1200,20)

Engine.run(engine)
}


function draw() {
	Engine.update(engine)
  

  
  background(255);
 ground.display();

 paper.display();

 
 dustbin3.display();
  drawSprites();

}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-100})
	}
}

 


