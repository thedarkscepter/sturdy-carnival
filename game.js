class Game{


constructor(){}

 getState(){
var gameStateRef = database.ref('GS')
gameStateRef.on("value", function(data){Gamestate = data.val()})
 }


update(state){
database.ref('/').update({GS:state})
}


async start(){ 


if(Gamestate == 0){

player = new Player()
var playercountref = await database.ref('PC').once("value")
if(playercountref.exists()){
    Playercount = playercountref.val()
player.getCount()}
form = new Form()
form.display()


}
car1 = createSprite(100,200)
car2 = createSprite(300,200)
car2 = createSprite(500,200)
car4 = createSprite(700,200)
cars = [car1, car2, car3, car4]

}

play(){

form.hide()
textSize(30)
text("GAME START PS:IK ITS CHEAP", 120, 100)
Player.getplayerinfo()

if(allplayers !== undefined){

var index = 0
var x = 0
var y 
for( var plr in allplayers){

index = index+1
x = x+200
y = displayHeight - allplayers[plr.distance];
cars[index-1].x = x
cars[index-1].y = y
if(index == player.index){

cars[index-1].shapeColor = "red"
camera.position.x = displayWidth/2
camera.position.y = cars[index-1].y


}

}
}
if(keyIsDown(UP_ARROW) && player.index !== null){


player.distance+=5
player.Update() 











}
drawSprites();



}









}