
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var scubaD, scubaDImg;
var shark1, sharkImg;
var jf, jfImg;
var sharksGroup, jfGroup;
var bg, bgImg;
var world, engine;

function preload()
{
	scubaDImg = loadAnimation("Images/Scuba/scuba1.png", "Images/Scuba/scuba2.png", "Images/Scuba/scuba3.png", 
	"Images/Scuba/scuba4.png", "Images/Scuba/scuba5.png", "Images/Scuba/scuba6.png");

	sharkImg = loadAnimation("Images/Shark/shark1.png", "Images/Shark/shark2.png", "Images/Shark/shark3.png", 
	"Images/Shark/shark4.png", "Images/Shark/shark5.png");

	jfImg = loadAnimation("Images/Jellyfish/jf1.png", "Images/Jellyfish/jf2.png", "Images/Jellyfish/jf3.png", 
	"Images/Jellyfish/jf4.png");

	bgImg = loadImage("Images/bg.jpg");
}

function setup() {
	createCanvas(1725, 820);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	scubaD = createSprite(170,400,50,50);
	scubaD.addAnimation("scubaAanimation", scubaDImg);

	sharksGroup = createGroup();
  	jfGroup = createGroup();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgImg);
  shark();
  jellyfish();
  
  drawSprites();
 
}

function shark(){
	if(frameCount % 140 === 0){
		shark1 = createSprite(1920,Math.round(random(100,800)),50,50);
		shark1.addAnimation("sharkAanimation", sharkImg);
		shark1.velocityX = -7;
		shark1.lifetime = 500;
		sharksGroup.add(shark1);
	}
}

function jellyfish(){
	if(frameCount % 190 === 0){
		jf = createSprite(Math.round(random(400,1700)),950,50,50);
		jf.addAnimation("jfAanimation", jfImg);
		jf.velocityY = -7;
		jf.lifetime = 500;
		jfGroup.add(jf);
	}
}
