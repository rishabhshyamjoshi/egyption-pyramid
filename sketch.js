const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;

  var engine,world;
  var stick1,stick2,stick3,stick4,stick5,stick6,stick7;
  var traingle1;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world  = engine.world;
  stick1= createSprite (400,355,70,280);
  stick1.shapecolour="red";
  stick2= createSprite (450,355,70,280);
  stick2.shapecolour="red";
  stick3= createSprite (350,355,50,190);
  stick3.shapecolour="red";
  stick4= createSprite (500,355,50,190);
  stick4.shapecolour="red";
  stick5= createSprite (300,355,50,190);
  stick5.shapecolour="red";
  stick6= createSprite (550,355,50,190);
  stick6.shapecolour="red";
  stick7= createSprite (250,355,50,90);
  stick7.shapecolour="red";
  stick7= createSprite (600,355,50,90);
  stick7.shapecolour="red";
  stick7= createSprite (200,370,50,65);
  stick7.shapecolour="red";
  stick7= createSprite (650,370,50,65);
  stick7.shapecolour="red";
  traingle1= createSprite(425,205,50,50);
 

  }

function draw() {
  background("blue");  
  stick1.display();
  stick2.display();
  stick3.display();
  stick4.display();
  stick5.display();
  stick6.display();
  stick7.display();
  text("egyption pyramid", 250, 100);
  if(keyDown(LEFT_ARROW)){
  text.scale=text.scale+0.05;
  }
  
  
  drawSprites();
  }