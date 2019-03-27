class Ball {
  constructor(color, number, x, y, speed){
  this.color  =color;
  this.number =number;
  this.x      =Math.floor(Math.random() * 1000) + 1;
  this.y      =Math.floor(Math.random() * 500) + 1;
  this.speed  =speed;
  }
    render(){
      var html=`
      <div class="ball ball--${this.color}" style="left: ${this.x}px; right:${this.y}px">
        <div class="number">${this.number}</div>
      </div>
      `;
      document.getElementById('table').innerHTML+=html;
 }
}
