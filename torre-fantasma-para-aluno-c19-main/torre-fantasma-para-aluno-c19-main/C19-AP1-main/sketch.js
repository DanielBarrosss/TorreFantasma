var torre, imagemTorre;
var porta,imagemPorta,portaGrupo;
var grade,imagemGrade,gradeGrupo;
var fantasma,imagemFantasma;
var blocoInvisivel, blocoInvisivelGp;
var gameState = "play"

function preload(){
  imagemTorre = loadImage("tower.png");
  imagemPorta = loadImage("door.png");
  imagemGrade = loadImage("climber.png");
  imagemFantasma = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup(){
  createCanvas(600,600);
  //spookySound.loop();
  torre = createSprite(300,300);
  torre.addImage("tower",imagemTorre);
  torre.velocityY = 1;

  portaGrupo=new Group()
  gradeGrupo=new Group()
  blocoInvisivelGp=new Group()

  fantasma=createSprite(200,200,50,50)
  fantasma.addImage(imagemFantasma)
  fantasma.scale=0.3
}

function draw(){
  background(0);
  
  if(gameState==="play"){
    if(torre.y > 400){
      torre.y = 300
    }

    if(keyDown("left")){
      fantasma.x=fantasma.x-3
    }

    if(keyDown("right")){
      fantasma.x=fantasma.x+3
    }

    if(keyDown("space")||(keyDown("up"))){
      fantasma.velocityY=-10
        
    }
    fantasma.velocityY+=0.8
    createAll()

    drawSprites();

    if (gradeGrupo.isTouching(fantasma)) {
  fantasma.velocityY=0
    }
    
    if (blocoInvisivelGp.isTouching(fantasma)||fantasma.y>600 ) {
      fantasma.destroy()
      gameState="end"
    }
    
  }
    
  if(gameState==="end"){
fill("red")
textSize(40)
text("game over",width/2-100,height/2)
  }
    
   

    
    
   
    
    
  }
  

function createAll(){
if(frameCount%180===0){
porta=createSprite(200,-50)
grade=createSprite(200,10)
blocoInvisivel=createSprite(200,15)
blocoInvisivel.width=grade.width
blocoInvisivel.height=2

porta.x=Math.round(random(120,400));
grade.x=porta.x
blocoInvisivel.x=porta.x

porta.velocityY=2
grade.velocityY=2
blocoInvisivel.velocityY=2

porta.addImage(imagemPorta);
grade.addImage(imagemGrade);

porta.lifetime=675
grade.lifetime=675
blocoInvisivel.lifetime=675

portaGrupo.add(porta)
gradeGrupo.add(grade)
blocoInvisivelGp.add(blocoInvisivel)
blocoInvisivel.debug=true

fantasma.depth=porta.depth
fantasma.depth+=1
}
}

    
   
  


