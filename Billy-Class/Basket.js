class Basket {
  constructor(number,x,y,s){
    this.number=number;
    this.x=x;
    this.y=y;
    this.s=s;
    this.balls =[]; //mingile din cos
  }
  render(){
    var hole=`
      <div class="basket basket--${this.number}" style="width:${this.s}px;height:${this.s}px;
      position: absolute; left: ${this.x}px; top:${this.y}px">

    </div>`;
    document.getElementById("table").innerHTML+=hole;

    }

}

//
// var h1=new Basket(1,40,45);
// var h2=new Basket(2,800,45);
// var h3=new Basket(3,1550,45);
// var h4=new Basket(4,40,740);
// var h5=new Basket(5,800,740);
// var h6=new Basket(6,1550,740);
// h1.render();
// h2.render();
// h3.render();
// h4.render();
// h5.render();
// h6.render();
