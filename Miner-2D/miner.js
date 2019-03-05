var miner_row = 1; //randul in care se afla minerul
var miner_col = 1; // coloana in care se afla minerul


function action(){
  // console.log(event);
  if(event.code=="ArrowRight"){
    moveRight();
  }
  if(event.code=="ArrowLeft"){
    moveLeft();
  }
  if(event.code=="ArrowUp"){
    moveUp();
  }
  if(event.code=="ArrowDown"){
    moveDown();
  }
}
// function moveLeft(){
//   if(miner_col<1){
//   miner_col++;
// }else{
//    miner_col = 10;
//   } show();
//
// }
//
// function moveRight(){
//  if(miner_col<1){
//   miner_col++;
// }else{
//  miner_col = 1;
//   }show();
// }

const BOMB1_COL = 10;
const BOMB1_ROW = 1;

function moveRight(){
  miner_col++;
show();
}

function moveLeft(){
  miner_col--;
show();
}
function moveUp(){
  miner_row--;
show();
}
function moveDown(){
  miner_row++;
show();
}
function show(){
    var div = document.getElementById('map');
      div.innerHTML=``;
  for(var row = 1; row<=10; row++ ){
      ///////////////asta e un rand//////////////
    for(var col = 1; col<=10; col++ ){
      var content =``;
      if(miner_row == row && miner_col == col){
         content = `<div class="miner"></div>`;
      }
      div.innerHTML += `<div class="grass"> ${content} </div>`;
       }
       ///////////////asta e un rand//////////////
      }
    }
show();
