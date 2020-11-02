
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;

function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperBall=new Paper();
	ground=new Ground();
	boxLeft=new Box(850,500,20,100);
	boxRight=new Box(1050,500,20,100);
	boxBottom=new Box(950,550,220,20);
	var render=Render.create({
		element:document.body,
		engine:engine,
		options:{
			width:1200,
			height:700,
			wireframes:false
		}
	})
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);

  paperBall.display();
  ground.display();
  boxLeft.display();
  boxRight.display();
  boxBottom.display();
  keyPress();
  drawSprites();
}

function keyPress(){
	if(keyCode===UP_ARROW){
		Body.applyForce(paperBall.body,paperBall.body.position,{x:85,y:-85});
	}
}


