var miner_row = 1; //randul in care se afla minerul
var miner_col = 1; // coloana in care se afla minerul
const BOMB1_COL = Math.floor(Math.random() * 10) + 1;
const BOMB1_ROW = Math.floor(Math.random() * 10) + 1;
const BOMB2_COL = Math.floor(Math.random() * 10) + 1;
const BOMB2_ROW = Math.floor(Math.random() * 10) + 1;
const BOMB3_COL = Math.floor(Math.random() * 10) + 1;
const BOMB3_ROW = Math.floor(Math.random() * 10) + 1;
var miner_health = 3;

function action(){
  // console.log(event);
  if(event.code=="ArrowRight"){
    moveRight();
  }
  else if(event.code=="ArrowLeft"){
    moveLeft();
  }
  else if(event.code=="ArrowUp"){
    moveUp();
  }
  else if(event.code=="ArrowDown"){
    moveDown();
  }
}


function moveRight() {
    if(miner_col >= 10){
      miner_col = 1;
    }else{
      miner_col++;
    }
    if(miner_row == BOMB1_ROW && miner_col == BOMB1_COL){
      miner_health--;
    }else if(miner_row == BOMB2_ROW && miner_col == BOMB2_COL){
      miner_health--;
    }else if(miner_row == BOMB3_ROW && miner_col == BOMB3_COL){
      miner_health--;
    }
    if(miner_health <= 0){
        location.reload();
      }
    show();
}
function moveLeft() {
    if(miner_col <= 1){
      miner_col = 10;
    }else{
      miner_col--;
    }
    if(miner_row == BOMB1_ROW && miner_col == BOMB1_COL){
      miner_health--;
    }else if(miner_row == BOMB2_ROW && miner_col == BOMB2_COL){
      miner_health--;
    }else if(miner_row == BOMB3_ROW && miner_col == BOMB3_COL){
      miner_health--;
    }
    if(miner_health <= 0){
        location.reload();
      }
    show();
}
function moveUp(){
  if(miner_row <= 1){
    miner_row = 10;
  }else{
    miner_row--;
  }
  if(miner_row == BOMB1_ROW && miner_col == BOMB1_COL){
    miner_health--;
  }else if(miner_row == BOMB2_ROW && miner_col == BOMB2_COL){
    miner_health--;
  }else if(miner_row == BOMB3_ROW && miner_col == BOMB3_COL){
    miner_health--;
  }
  if(miner_health <= 0){
      location.reload();
    }
    show();
}
function moveDown() {
    if(miner_row >= 10){
      miner_row = 1;
    }else{
      miner_row++;
    }
      if(miner_row == BOMB1_ROW && miner_col == BOMB1_COL){
        miner_health--;
      }else if(miner_row == BOMB2_ROW && miner_col == BOMB2_COL){
        miner_health--;
      }else if(miner_row == BOMB3_ROW && miner_col == BOMB3_COL){
        miner_health--;
      }
      if(miner_health <= 0){
          location.reload();
        }
    show();
}

function show(){
    var div = document.getElementById('map');
    var health = document.getElementById('health');
        div.innerHTML=``;
  for(var row = 1; row<=10; row++ ){
      ///////////////asta e un rand//////////////
    for(var col = 1; col<=10; col++ ){
      var content =``;
      if(miner_row == row && miner_col == col){
         content = `<div class="miner"></div>`;
      }
        //!!!!!!!!BOMB!!!!!!!!!!!!//
        if(col == BOMB1_COL && row ==BOMB1_ROW ){
        var content_2 = `<div class="bomb"></div>`
        } else {
        var content_2 = ``;
        }
        if(col == BOMB2_COL && row ==BOMB2_ROW ){
        var content_3 = `<div class="bomb"></div>`
        } else {
        var content_3 = ``;
        }
        if(col == BOMB3_COL && row ==BOMB3_ROW ){
        var content_4 = `<div class="bomb"></div>`
        } else {
        var content_4 = ``;
        }
      //!!!!!!!!BOMB!!!!!!!!!!!!//
      div.innerHTML += `<div class="grass">${content}${content_2}${content_3}${content_4}</div>`;
      health.innerHTML = `Life's: ${miner_health}`
       }
       ///////////////asta e un rand//////////////
      }
    }
show();
