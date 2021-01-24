var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var boxSide1 , boxSide2 , boxSide3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	boxSide1=createSprite(width/2,650,200,20);
	boxSide1.shapeColor=color("red");
	boxSide2=createSprite(490,620,20,100);
	boxSide2.shapeColor=color("red");
	boxSide3=createSprite(290,620,20,100);
	boxSide3.shapeColor=color("red");

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(600, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	boxSide1 = Bodies.rectangle(width/2,650,200,20 , {isStatic:true} );
 	World.add(world, boxSide1);
	boxSide2 = Bodies.rectangle(490,620,20,100 , {isStatic:true} );
 	World.add(world, boxSide2);
	boxSide3 = Bodies.rectangle(290,620,20,100, {isStatic:true} );
 	World.add(world, boxSide3);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  keyPressed();
}

function keyPressed() {
 if (keyDown(DOWN_ARROW)  ) {
	Matter.Body.setStatic(packageBody,false);
  }
}