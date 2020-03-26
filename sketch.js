var Gamestate = 0;
var Playercount = 0;
var form, player, game;
var database
var allplayers
var car1
var car2
var car3
var car4
var cars

function setup(){
    createCanvas(displayWidth - 20,displayHeight - 30);
    database = firebase.database();
    game = new Game ()
    game.getState()
    game.start()
}

function draw(){
 if(Playercount == 4){


game.update(1)



 }
 game.getState()
 
if(Gamestate == 1){

clear()
game.play()

}



}





