class Ball {
  constructor(color, number, x, y,a){
  this.color   =color;
  this.number  =number;
  this.x       = x || Math.round(Math.random()*50);
  this.y       = y || Math.round(Math.random()*50);
  this.a       = a || Math.round(Math.random()*360);
  this.speedX  =0;
  this.speedY  =0;
  this.diameter=50;
  }
    render(){
      var html=`
      <div id="b-${this.number}" class="ball ball--${this.color}" style="left: ${this.x}px; right:${this.y}px">
        <div class="number">${this.number}</div>
      </div>
      `;
      document.getElementById('table').innerHTML+=html;
      var that = this;
      setInterval(function(){
        that.move();
      },50);
    }
    move(){
      if(this.isAtBottom()){
        this.speedY *= -1;
      }
      if(this.isAtTop()){
        this.speedY *= -1;
      }
      if(this.isAtLeft()){
        this.speedX *= -1;
      }
      if(this.isAtRight()){
        this.speedX *= -1;
      }
      
      if(this.speedX>0&&this.speedX<table.w-this.x){
      this.x  += this.speedX;
    }else if(this.speedX>1){
        this.X +=table.w-this.X;
     }
     if(this.speedX<0 && this.speedY> -this.x){
     this.x  += this.speedX;
   }else if(this.speedX<-1){
       this.x += -this.x;
     }


      if(this.speedY>0&&this.speedY<table.h-this.y){
      this.y  += this.speedY;
       }else if(this.speedY>1){
        this.y +=table.h-this.y;
     }
     if(this.speedY<0 && this.speedY> -this.y){
     this.y  += this.speedY;
        }else if(this.speedY<-1){
       this.y += -this.y;
     }


      this.speedX*=0.8;
      this.speedY*=0.8;

      var ball =document.getElementById(`b-${this.number}`);
      ball.style.left =`${this.x}px`;
      ball.style.top =`${this.y}px`;
      ball.style.transform=`rotate(${this.a}deg)`;
      // console.log(this.x, this.y);
    }
    push(sx,sy){
      this.speedX= sx;
      this.speedY= sy;
    }
    isAtBottom(){
      return this.y >= table.h-this.diameter;
    }
    isAtTop(){
      return this.y <= 0;
    }
    isAtLeft(){
      return this.x <=0;
    }
    isAtRight(){
      return this.y >= table.w-this.diameter;
    }
}
