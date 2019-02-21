//coordinates
const MINE_1 = 3;
const MINE_2 = 7;
const MINE_3 = 9;

var miner  =   2;


function move_left(){
miner--;
show();
}
function move_right(){
miner++;
show();
}

function show(){
  var div = document.getElementById('map'); //conectam div cu elem
  div.innerHTML=``;  //curatam divul
     //MAP!!!!!!!!!!!!!!!!
for(var step =1; step<=10; step++ ){
    if(step == miner){
  var content =`<div class="miner"></div>`;

 }else{
    var content =``;
 }

  div.innerHTML +=
    `<div class="grass">
     ${content}
    </div>`

 }
}

show();
// 1)var miner random()
//2)sa afisem minele show(minele)
//3)if() limits (sa nu disprata minerul)
