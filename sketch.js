var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var t1,t2,t3,s1,s2,s3;


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

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	s1=createSprite(400,650,120,20);
	s1.shapeColor=color(255,0,0);

	s2=createSprite(470,610,20,100);
	s2.shapeColor=color(255,0,0);

	s3=createSprite(330,610,20,100);
	s3.shapeColor=color(255,0,0);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);
	
	t1 = Bodies.rectangle(400,630,120,20, {isStatic:true} );
	World.add(world, t1);

	t2 = Bodies.rectangle(490,610,20,100, {isStatic:true});
	World.add(world, t2);

	t3 = Bodies.rectangle(310,610,20,100, {isStatic:true});
	World.add(world,t3);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;

  if (keyPressed()){
	Body.setStatic(packageBody,false);
   }
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	return true;
  } else {
	  return false;
  }
}



