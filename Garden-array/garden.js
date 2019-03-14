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
  MELON,     //0
  MELON,     //1
  MELON,     //2
  EMPTY,     //3
  EMPTY,     //4
  TOMATO,    //5
  TOMATO,    //6
  EMPTY,     //7
  CUCUMBER,  //8
  CUCUMBER,  //9
];

function show(){
  var div = document.getElementById('garden');
  var money = document.getElementById('money');
  div.innerHTML =``;
  for(var i=0; i<=9; i++){
    if(garden[i]== MELON) {
    div.innerHTML+= `<div class="melon" onclick="gather(MELON,'+i+');"></div> `
      }else if(garden[i]== TOMATO){
    div.innerHTML+= `<div class="tomato" onclick="gather(TOMATO,'+i+');"></div> `
      }else if(garden[i]== CUCUMBER){
    div.innerHTML+= `<div class="cucumber" onclick="gather(CUCUMBER,'+i+');"></div> `
      }else if(garden[i]== EMPTY) {
    div.innerHTML+= `<div class="empty"></div> `
   }
}
   div.innerHTML+= `<div class="coin"></div> `
   money.innerHTML =`Money: ${money}`

}



function gather(vegetable, i){
  if(vegetable ==MELON){
    garden[i]=EMPTY;

  // alert(MELON_PRICE);
    }else if(vegetable == TOMATO){
      garden[i]=EMPTY;
       // alert(TOMATO_PRICE);
     } else if(vegetable == CUCUMBER){
        garden[i]=EMPTY;
     // alert(CUCUMBER_PRICE);

  }
}

show();
