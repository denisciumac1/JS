class Ball {
  constructor(color, number, x, y, speed){
  this.color  =color;
  this.number =number;
  this.x      =x;
  this.y      =y;
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
