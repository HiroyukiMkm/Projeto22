var starImg,bgImg;
var star, starBody;
var fada,fadaImg;
var som;
//criar variável para sprite de fada e imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
    //carregar animação de fada
    fadaImg = loadAnimation("fairyImage1.png","fairyImage2.png");
    som = loadSound("JoyMusic.mp3");
}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada
    som.play();
   //criar sprite de fada e adicionar animação para fada
    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    fada = createSprite(150,550);
    fada.addAnimation("fada",fadaImg);
    fada.scale = 0.2

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}
 function draw(){
    background(bgImg);

    star.x = starBody.position.x;
    star.y = starBody.position.y;

    if(keyCode === RIGHT_ARROW){
        fada.x = fada.x +10;
    }
    if(keyCode === LEFT_ARROW){
        fada.x = fada.x -10;
    }
    if(keyCode === DOWN_ARROW){
        Matter.Body.setStatic(starBody,false);
    }

    if(star.y > 520 && starBody.position.y > 520){
        Matter.Body.setStatic(starBody,true);
        }

    
    drawSprites();

    
 }