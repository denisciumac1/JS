//coordinates
const MINE_1 = 3;
const MINE_2 = 7;
const MINE_3 = 9;

var miner  =   Math.floor(Math.random() * 10) + 1;
// 1)var miner random()
//2)sa afisem minele show(minele)
//3)if() limits (sa nu disprata minerul)
function move_left(){
  if(miner>1){
  miner--;
}else{
   miner = 1;
  } show();
}

function move_right(){
 if(miner<10){
  miner++;
}else{
 miner = 10;
  }show();
}

function show(){
  var div = document.getElementById('map'); //conectam div cu elem
    div.innerHTML=``;  //curatam divul
                    //!!!!!!!!MAP!!!!!!!!!!!!//
for(var step = 1; step<=10; step++ ){
    if(step == miner){
  var content =`<div class="miner"></div>`; //template string
 }else {
    var content = ``;
 }
                    //!!!!!!!!BOMB!!!!!!!!!!!!//
  if(step == MINE_1){
  var content_2 = `<div class="bomb"></div>`
  }else {
  var content_2 = ``;
  }
  if(step == MINE_2){
  var content_3 = `<div class="bomb"></div>`
  }else {
  var content_3 = ``;
  }if(step == MINE_3){
  var content_4 = `<div class="bomb"></div>`
  }else {
  var content_4 = ``;
  }
  div.innerHTML += `<div class="grass"> ${content} ${content_2}${content_3}${content_4}</div>`
 }

}
show();
