
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;


function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

  ball = new Canon(300,100,40,40)
  baseground = new Ground(800,400,400,45.0)
  baseground2 = new Ground(600,600,1200,40)
  box1 = new Box1(800,370,50,50)
  box2 = new Box2(850,370,50,50)
  box3 = new Box1(900,370,50,50)
  box4 = new Box2(750,370,50,50)
  box5 = new Box1(700,370,50,50)
  box6 = new Box2(650,370,50,50)
  box7 = new Box2(950,370,50,50)

  box8 = new Box2(925,320,50,50)
  box9 = new Box1(875,320,50,50)
  box10 = new Box2(825,320,50,50)
  box11 = new Box1(775,320,50,50)
  box12 = new Box2(725,320,50,50)
  box13 = new Box1(675,320,50,50)

  box14 = new Box1(800,270,50,50)
  box15 = new Box2(850,270,50,50)
  box16 = new Box1(900,270,50,50)
  box17 = new Box2(750,270,50,50)
  box18 = new Box1(700,270,50,50)

  box19 = new Box1(875,220,50,50)
  box20 = new Box2(825,220,50,50)
  box21 = new Box1(775,220,50,50)
  box22 = new Box2(725,220,50,50)

  box23 = new Box1(800,170,50,50)
  box24 = new Box2(850,170,50,50)
  box25 = new Box1(750,170,50,50)
  

  slingShot = new Sling(ball.body,{x:300,y:120})
}


function draw(){
    background("blue");
    Engine.update(engine);
    strokeWeight(3);

ball.display()
baseground.display()
baseground2.display()
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

box14.display()
box15.display()
box16.display()
box17.display()
box18.display()

box20.display()
box21.display()
box22.display()
box19.display()

box23.display()
box24.display()
box25.display()

slingShot.display()
}

function mouseDragged() {
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased() {
    slingShot.fly()
}