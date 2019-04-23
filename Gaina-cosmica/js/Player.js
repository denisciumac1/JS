class Player{
  constructor(){
    this.id = "p-" + Math.round(Math.random()*10000000);
    this.type ='original';
    this.frames = ["-210px -172px;"]; //cadrele spritului
    this.x = 0; //random() 0..width window
    this.y = 750;
    this.w = 41;
    this.h = 30;
    this.direction_h =  "right";   //
  }


   addToMap(){  //adaugam elementul pe harta(redesenam elementul)
     window.map.innerHTML +=
      `<div id ="${this.id}">` +
       this.render()           +
       `</div>`
      //  this.live();
      document.body.onkeydown = this.action.bind(this);
      // !!!bind(this) -forteaza transmiterea
   }
   action(){
     if(event.code == "Space"){
       this.shoot();
     }
     if(event.key == "ArrowRight"){
       this.moveRight();
     }
     if(event.key == "ArrowLeft"){
       this.moveLeft();
     }
     this.refresh();
  }

  shoot(){
    let rocket = new Rocket();
    rocket.x =this.x +this.w/2 - rocket.w/2;
    rocket.y =this.y-rocket.h;
    rocket.addToMap();
    rocket.live();
  }

   refresh(){
     document.getElementById(this.id).innerHTML = this.render();
    }

  // live(){
  //   var that =this;
  //   setInterval(function(){
  //     that.frames.push(that.frames.shift());
  //
  //     if(that.direction_h == "right"){
  //       that.moveRight();
  //     }
  //     if(that.direction_h == "left"){
  //       that.moveLeft();
  //     }
  //
  //     that.refresh();
  //   },5 );
  // }


  // movement
  moveRight(){

    if(this.x>window.innerWidth-this.w){
      this.direction_h="left";
      // this.moveDown();
    }
    this.x +=5;
  }

  moveLeft(){

    if(this.x<=0){
      this.direction_h="right";
      // this.moveDown();
    }
    this.x -=5;
  }

  // moveDown(){
  //   this.y+=10;
  // }


  render(){
    let html = `
    <div class="player" style="width:   ${this.w}px;
                                height: ${this.h}px;
                                left:   ${this.x}px;
                                top:    ${this.y}px;
                                background-position:${this.frames[0]};
    "></div>
    `;
    return html;
  }

}
