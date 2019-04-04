
var table = new Table(1100,600,50);


// addBalls
table.addBall(new Ball("white", 0,10,10));
table.addBall(new Ball("yellow", 1,300,10));

console.log("intersecteaza?" , (table.balls[0].intersects(   table.balls[1]  ) ) );


table.render();
