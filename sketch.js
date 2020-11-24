const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world
var polygonImg,polygon

function preload () {
polygonImg = loadImage("polygon.png")
}


function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run (engine)

  ground = new Ground(450,380,900,20)
  stand = new Ground(400,300,250,10)
  polygon = Bodies.circle(50,200,20)
  World.add(world,polygon)
  Sling = new Slingshot(this.polygon,{x:100,y:200})
  box1 = new Block(300,275,40,50)
  box2 = new Block(340,275,40,50)
  box3 = new Block(380,275,40,50)
  box4 = new Block(420,275,40,50)
  box5 = new Block(460,275,40,50)
  box6 = new Block(500,275,40,50)
  box7 = new Block(340,225,40,50)
  box8 = new Block(380,225,40,50)
  box9 = new Block(420,225,40,50)
  box10 = new Block(460,225,40,50)
  box11 = new Block(380,175,40,50)
  box12 = new Block(420,175,40,50)
  box13 = new Block(400,125,40,50)
}


function draw() {
  
  background(100);  
  imageMode(CENTER) 
  image(polygonImg ,polygon.position.x,polygon.position.y,40,40);

   Sling.display()
   stand.display()
   ground.display()
   box1.display()
   box2.display()
   box3.display()
   box4.display()
   box5.display()
   box6.display()
   box7.display()
   box8.display()
   box9.display()
   box10.display()
   box11.display()
   box12.display()
   box13.display()

 drawSprites();
}

function mouseDragged ()
{
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
  
} 

function mouseReleased ()
{
  Sling.fly()
} 

function keyPressed ()
{
  if (keyCode === 32){
    Sling.attach(this.polygon)
  }
}

