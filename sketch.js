
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var ground;
var tree;
var stone;
var boy;

function preload() {
	boy = loadImage("boy.png");
}

function setup() {
	createCanvas(1200, 500);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600, 485, 1200, 20);

	tree = new Tree(1000, 300, 150, 350);

	stone = new Stone(600, 300, 20);

    var render = Render.create({
		element: document.body,   //display all the bodies
		engine: engine,           //display all the functions
		options:{                 //dimension of the render
			width: 1200,
			height: 600,
			wireframes: false
		}
	});
    Engine.run(engine);          //starting the render
	Render.run(render);
}


function draw() {
	background("black");
	Engine.update(engine);
	image(boy, 150, 300, 200, 300);
	ground.display();
	tree.display();
	stone.display();
  
}



