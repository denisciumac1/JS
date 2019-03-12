// Harta gradinii --Array
const EMPTY  =    0;
const CUCUMBER  = 1;
const MELON  =    2;
const TOMATO =    3;

const CUCUMBER_PRICE  = 10;
const MELON_PRICE  =    20;
const TOMATO_PRICE =    30;


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
  div.innerHTML ='';
  for(var i=0; i<=9; i++){
    if(garden[i]== MELON) {
    div.innerHTML+= `<div class="melon" onclick="gather(MELON);"></div> `
      }else if(garden[i]== TOMATO){
    div.innerHTML+= `<div class="tomato" onclick="gather(TOMATO);"></div> `
      }else if(garden[i]== CUCUMBER){
    div.innerHTML+= `<div class="cucumber" onclick="gather(CUCUMBER);"></div> `
      }else if(garden[i]== EMPTY) {
    div.innerHTML+= `<div class="empty"></div> `
   }
  }
}

function gather(vegetable){
  if(vegetable ==MELON){
  alert(MELON_PRICE);
}else if(vegetable == TOMATO){
   alert(TOMATO_PRICE);
 } else if(vegetable == CUCUMBER){
 alert(CUCUMBER_PRICE);

  }
}


show();
