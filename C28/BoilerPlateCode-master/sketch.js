var playerimg
function preload() {
  //load game assets
 playerimg=loadImage("download.jpg")
}

var player , worm
var wormgroup , score=0
function setup() {
  createCanvas(600,600);
 player= createSprite(100,100,20,20)
 player.addImage(playerimg)
 player.scale=0.2
 wormgroup=new Group()
}

function draw() {
  background("black");  
    player.x=mouseX
    player.y=mouseY
console.log(frameCount%70==0)
   wormgenerate()
   for(var i=0;i<wormgroup.length;i++){
     var temp=wormgroup.get(i)
     if(player.isTouching(temp)){
temp.destroy()
score=score+1

     }
    }
  drawSprites()
  textSize(20)
  text("score ="+score,500,50)
  
}
function wormgenerate(){
  if(frameCount%70==0){
    worm=createSprite(300,300,50,50)
    worm.x=random(100,500)
    worm.y=random(100,500)
    var a=random(-6,6)
    //console.log(a)
    worm.velocityX=a
    worm.velocityY=random(-6,6)
    worm.shapeColor="blue"
    wormgroup.add(worm)
  }
 
}