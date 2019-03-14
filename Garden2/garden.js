// Harta gradinii --Array
const EMPTY  =    0;
const CUCUMBER  = 1;
const MELON  =    2;
const TOMATO =    3;

const CUCUMBER_PRICE  = 10;
const MELON_PRICE  =    20;
const TOMATO_PRICE =    30;

var money = 100;

var garden = [
    [1,0,0,0,0,0,0,0,0,0],
    [1,0,0,0,0,3,0,0,0,0],
    [1,0,2,0,0,0,1,0,1,0],
    [0,0,0,0,0,1,0,0,0,0],
    [0,0,0,2,2,2,0,0,2,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,3,3,3,0,0,3,0],
    [0,0,0,0,0,0,0,0,1,0],
    [0,0,0,0,0,1,0,0,0,0],
    [0,0,3,0,1,0,0,0,2,0],

   ];

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
      }else if(garden[r][c]== EMPTY) {
    div.innerHTML+= `<div class="empty"></div> `
   }
 }
}
   div.innerHTML+= `<div class="coin"></div> `
   div_money.innerHTML =`Money: ${money}`

}


function gather(vegetable,r,c){
  if(vegetable ==MELON){
  garden[r][c]=EMPTY;
    money=money+MELON_PRICE;
    show();
  // alert(MELON_PRICE);
    }else if(vegetable == TOMATO){
      garden[r][c]=EMPTY;
      //  alert(TOMATO_PRICE);
       money=money+TOMATO_PRICE;
       show();
     } else if(vegetable == CUCUMBER){
        garden[r][c]=EMPTY;
        money=money+CUCUMBER_PRICE;
    //  alert(CUCUMBER_PRICE);
     show();
  }
}
show();
