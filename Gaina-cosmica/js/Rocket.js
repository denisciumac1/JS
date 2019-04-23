class Rocket{
  constructor(){
    this.id = "r-" + Math.round(Math.random()*10000000);
    this.type ='comodore';
    this.frames = ["-52px -812px;"]; //cadrele spritului
    this.x = 0; //random() 0..width window
    this.y = 0;
    this.w = 16;
    this.h = 22;
  }


   addToMap(){  //adaugam elementul pe harta(redesenam elementul)
     window.map.innerHTML +=
      `<div id ="${this.id}">`  +
       this.render()            +
       `</div>`

   }


   refresh(){
     document.getElementById(this.id).innerHTML = this.render();
    }

  live(){
    var that =this;
    setInterval(function(){
      for(var index in invaders){
        // verificam daca se ciocneste
    if(touch(
        window[that.id].firstElementChild,
        window[invaders[index].id].firstElementChild
    )
  ){
    invaders[index].die();
  }
 }
    that.moveUp();
    that.refresh();
  },25 );

  }

  moveUp(){
    this.y-=10;
  }




  render(){
    let html = `
    <div class="rocket" style="width:   ${this.w}px;
                                height: ${this.h}px;
                                left:   ${this.x}px;
                                top:    ${this.y}px;
                                background-position:${this.frames[0]};
    "></div>
    `;
    return html;
  }

}
