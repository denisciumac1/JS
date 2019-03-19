// Harta gradinii --Array
const EMPTY  =    0;
const CUCUMBER  = 1;
const MELON  =    2;
const TOMATO =    3;
const RAT    =    4;
const TRAP    =    5;
const TRAP_R  =    5;
const TRAP_C =     6;


var timer = null;
const CUCUMBER_PRICE  = 10;
const MELON_PRICE  =    20;
const TOMATO_PRICE =    30;
var money = 100;
// coordonate rat
var rat_r = 0;
var rat_c = 0;
var rat_dir= "right";

var garden = [
    [4,1,0,0,0,2,0,0,1,0],
    [1,0,2,0,0,3,0,0,1,0],
    [1,0,2,0,2,0,1,0,1,0],
    [0,3,2,0,0,1,0,0,0,0],
    [0,0,0,2,2,2,0,0,2,0],
    [0,0,3,1,0,2,5,0,0,0],
    [2,0,0,3,3,3,0,0,3,0],
    [0,0,1,0,0,0,0,0,1,0],
    [0,0,0,0,0,1,0,2,0,0],
    [0,0,3,0,1,0,0,0,2,0],

   ];
// mishcarile ratului
function moveRatright(){
  if(rat_c<9){
  garden[rat_r][rat_c]=EMPTY;
  garden[rat_r][++rat_c]=RAT;
  show();
  }
}
function moveRatleft(){
  if(rat_c > 0){
  garden[rat_r][rat_c]=EMPTY;
  garden[rat_r][--rat_c]=RAT;
  show();
  }
}
function moveRattup(){
  if(rat_r > 0){
  garden[rat_r][rat_c]=EMPTY;
  garden[--rat_r][rat_c]=RAT;
  show();
  }
}
function moveRatdown(){
  if(rat_r < 9){
  garden[rat_r][rat_c]=EMPTY;
  garden[++rat_r][rat_c]=RAT;
  show();
  }
}
function moveRat(){
//schimbarea directie aliatoriu
  if(Math.round(Math.random()*100)%5==0){
  rat_dir= randomDirection();
  }

if(rat_dir == "right"){
        moveRatright();
    } else if (rat_dir == "left") {
        moveRatleft();
    } else if (rat_dir == "up") {
        moveRattup();
    } else if (rat_dir == "down") {
        moveRatdown();
    }
    //capcana
    if (rat_r==TRAP_R && rat_c==TRAP_C){
    money = money + 100;
    var option = confirm("Vrei sa omori sobolanul?");
    // location.reload();
    clearInterval(timer) ;

    }
}


function randomDirection(){
  var directions = ["right","left","up","down"];
  return directions[Math.round(Math.random()*3)];
}
timer = setInterval(moveRat, 10);

function show(){
  var div = document.getElementById('garden');
  var div_money = document.getElementById('money');
  div.innerHTML =``;
  for(var r=0; r<=9; r++){
    for(var c=0; c<=9; c++){
    if(garden[r][c]== MELON) {
    div.innerHTML+= `<div class="melon" onclick="gather(MELON,${r},${c});"></div> `
      }else if(garden[r][c]== TOMATO){
    div.innerHTML+= `<div class="tomato" onclick="gather(TOMATO,${r},${c});"></div> `
      }else if(garden[r][c]== CUCUMBER){
    div.innerHTML+= `<div class="cucumber" onclick="gather(CUCUMBER,${r},${c});"></div> `
      }else if(garden[r][c]== EMPTY){
    div.innerHTML+= `<div class="empty"></div> `
      }else if(garden[r][c]== RAT){
    div.innerHTML+= `<div class="rat" onclick="gather(RAT,${r},${c});"></div> `
    }else if(garden[r][c]== TRAP){
    div.innerHTML+= `<div class="trap" onclick="gather(TRAP,${r},${c});"></div> `
  }
}
   div.innerHTML+= `<div class="coin"></div> `
   div_money.innerHTML =`Money: ${money}`
  }
}
show();

function gather(vegetable,r,c){
  if(vegetable ==MELON){
  garden[r][c]=EMPTY;
    money=money+MELON_PRICE;
    show();
    }else if(vegetable == TOMATO){
      garden[r][c]=EMPTY;
       money=money+TOMATO_PRICE;
       show();
    } else if(vegetable == CUCUMBER){
        garden[r][c]=EMPTY;
        money=money+CUCUMBER_PRICE;
       show();
    }
}
// plasati o capcana de afishat
// daca rat nimerste in capcana +100
// var deat, true folse
