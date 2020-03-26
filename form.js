class Form{

constructor(){


     this.input = createInput("Name")
     this.button = createButton("pls play")
      this.greeting = createElement('h3');
       this.title = createElement('h2')




}
hide(){


this.input.hide()
this.button.hide()
this.greeting.hide()
this.title.hide()


}
display(){


this.title.html("Cheaper asphalt8")
this.title.position(displayWidth/2 - 50,0)
this.input.position(displayWidth/2 - 30,displayHeight/2 - 80)
this.button.position(displayWidth/2 + 30,displayHeight/2)
this.button.mousePressed(() => {this.input.hide(); this.button.hide(); player.name = this.input.value(); Playercount+=1; player.index = Playercount; player.Update(); player.updatecount(Playercount); this.greeting.html("welome and pls dont delete "+ player.name); this.greeting.position(displayWidth/2 - 70,displayHeight/4)})
}






}